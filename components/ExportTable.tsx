"use client";

import { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { supabase, TABLE_HASIL } from "@/lib/supabaseClient";

interface Row {
  id: string;
  nama: string;
  kelas: string;
  skor: number;
  max_skor: number;
  kategori_hasil: string;
  created_at: string;
}

export default function ExportTable() {
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [filterKelas, setFilterKelas] = useState("");

  useEffect(() => {
    async function load() {
      setLoading(true);
      const { data, error } = await supabase
        .from(TABLE_HASIL)
        .select("id, nama, kelas, skor, max_skor, kategori_hasil, created_at")
        .order("created_at", { ascending: false });
      if (error) {
        setErrorMsg(error.message);
      } else {
        setRows(data as Row[]);
      }
      setLoading(false);
    }
    load();
  }, []);

  const filtered = filterKelas ? rows.filter((r) => r.kelas === filterKelas) : rows;
  const daftarKelas = Array.from(new Set(rows.map((r) => r.kelas))).sort();

  function downloadExcel() {
    const data = filtered.map((r) => ({
      Nama: r.nama,
      Kelas: r.kelas,
      Skor: r.skor,
      "Skor Maksimal": r.max_skor,
      Kategori: r.kategori_hasil,
      Waktu: new Date(r.created_at).toLocaleString("id-ID"),
    }));
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Hasil OSIM");
    XLSX.writeFile(wb, "hasil-simulasi-osim.xlsx");
  }

  function downloadCsv() {
    const header = ["Nama", "Kelas", "Skor", "Skor Maksimal", "Kategori", "Waktu"];
    const lines = filtered.map((r) =>
      [
        r.nama,
        r.kelas,
        r.skor,
        r.max_skor,
        r.kategori_hasil,
        new Date(r.created_at).toLocaleString("id-ID"),
      ]
        .map((v) => `"${String(v).replace(/"/g, '""')}"`)
        .join(",")
    );
    const csv = [header.join(","), ...lines].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "hasil-simulasi-osim.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="w-full">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <label htmlFor="filter" className="text-sm text-sub">
            Filter kelas:
          </label>
          <select
            id="filter"
            value={filterKelas}
            onChange={(e) => setFilterKelas(e.target.value)}
            className="rounded-lg border border-line bg-transparent px-3 py-2 text-sm text-ink outline-none focus:border-accent"
          >
            <option value="">Semua kelas</option>
            {daftarKelas.map((k) => (
              <option key={k} value={k} className="bg-card text-ink">
                {k}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-2">
          <button
            onClick={downloadCsv}
            disabled={filtered.length === 0}
            className="rounded-lg border border-line px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent disabled:opacity-40"
          >
            Download CSV
          </button>
          <button
            onClick={downloadExcel}
            disabled={filtered.length === 0}
            className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-transform active:scale-[0.98] disabled:opacity-40"
          >
            Download Excel
          </button>
        </div>
      </div>

      {loading && <p className="text-sm text-sub">Memuat data…</p>}
      {errorMsg && <p className="text-sm text-bad">Gagal memuat data: {errorMsg}</p>}

      {!loading && !errorMsg && (
        <div className="overflow-x-auto rounded-2xl border border-line">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-line bg-card text-left">
                <th className="px-4 py-3 font-semibold text-ink">Nama</th>
                <th className="px-4 py-3 font-semibold text-ink">Kelas</th>
                <th className="px-4 py-3 font-semibold text-ink">Skor</th>
                <th className="px-4 py-3 font-semibold text-ink">Kategori</th>
                <th className="px-4 py-3 font-semibold text-ink">Waktu</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((r) => (
                <tr key={r.id} className="border-b border-line last:border-0 odd:bg-transparent even:bg-card/50">
                  <td className="px-4 py-3 text-ink">{r.nama}</td>
                  <td className="px-4 py-3 text-ink">{r.kelas}</td>
                  <td className="px-4 py-3 text-ink">
                    {r.skor} / {r.max_skor}
                  </td>
                  <td className="px-4 py-3 text-sub">{r.kategori_hasil}</td>
                  <td className="px-4 py-3 text-sub">
                    {new Date(r.created_at).toLocaleString("id-ID")}
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-6 text-center text-sub">
                    Belum ada data.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
