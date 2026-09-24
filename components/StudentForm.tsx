"use client";

import { useState } from "react";
import { DAFTAR_KELAS, Peserta } from "@/lib/types";
import CharacterAvatar from "./CharacterAvatar";

export default function StudentForm({
  onSubmit,
}: {
  onSubmit: (peserta: Peserta) => void;
}) {
  const [nama, setNama] = useState("");
  const [kelas, setKelas] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!nama.trim()) {
      setError("Nama belum diisi nih.");
      return;
    }
    if (!kelas) {
      setError("Pilih kelas kamu dulu ya.");
      return;
    }
    setError("");
    onSubmit({ nama: nama.trim(), kelas });
  }

  return (
    <div className="w-full animate-fade-slide">
      <h1 className="mb-1 text-2xl font-bold tracking-tight text-ink">
        🗳️ Simulasi Pemilihan OSIM
      </h1>
      <p className="mb-5 italic text-sub">
        Belajar Berdemokrasi Melalui Syura dan Pemilihan OSIM
      </p>

      <div className="rounded-2xl border border-line bg-card p-6 shadow-sm">
        <div className="mb-5 flex items-center gap-4">
          <CharacterAvatar mood="happy" className="h-14 w-14 flex-shrink-0" />
          <p className="text-sm italic leading-relaxed text-sub">
            &ldquo;Halo! Sebelum mulai, kenalan dulu yuk — siapa namamu dan kelas berapa?&rdquo;
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="nama" className="mb-1 block text-sm font-medium text-ink">
              Nama lengkap
            </label>
            <input
              id="nama"
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="Tulis nama kamu"
              className="w-full rounded-xl border border-line bg-transparent px-4 py-3 text-ink outline-none transition-colors focus:border-accent"
            />
          </div>

          <div>
            <label htmlFor="kelas" className="mb-1 block text-sm font-medium text-ink">
              Kelas
            </label>
            <select
              id="kelas"
              value={kelas}
              onChange={(e) => setKelas(e.target.value)}
              className="w-full rounded-xl border border-line bg-transparent px-4 py-3 text-ink outline-none transition-colors focus:border-accent"
            >
              <option value="" disabled>
                Pilih kelas
              </option>
              {DAFTAR_KELAS.map((k) => (
                <option key={k} value={k} className="bg-card text-ink">
                  {k}
                </option>
              ))}
            </select>
          </div>

          {error && <p className="text-sm text-bad">{error}</p>}

          <button
            type="submit"
            className="mt-2 rounded-xl bg-accent px-5 py-3 font-medium text-white transition-transform active:scale-[0.98]"
          >
            Mulai Simulasi
          </button>
        </form>
      </div>
    </div>
  );
}
