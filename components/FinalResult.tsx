"use client";

import { useEffect, useState } from "react";
import { maxScore } from "@/lib/stages";
import { supabase, TABLE_HASIL } from "@/lib/supabaseClient";
import { JawabanTahap, Peserta } from "@/lib/types";
import CharacterAvatar from "./CharacterAvatar";

function getKategori(pct: number) {
  if (pct >= 0.8) {
    return {
      emoji: "🏅",
      title: "Pemilih & Kandidat Teladan Madrasah",
      desc: "Sepanjang simulasi, kamu konsisten menjunjung kejujuran, keadilan, dan sikap legowo. Kamu benar-benar mempraktikkan nilai Rahmatan Lil Alamin dalam berdemokrasi.",
      mood: "happy" as const,
    };
  }
  if (pct >= 0.5) {
    return {
      emoji: "🌱",
      title: "Pemilih yang Cukup Bijak",
      desc: "Kamu sudah memahami sebagian besar nilai demokrasi madrasah, namun ada beberapa keputusan yang masih perlu dipertimbangkan lebih matang lagi.",
      mood: "happy" as const,
    };
  }
  return {
    emoji: "🔁",
    title: "Masih Perlu Belajar Lagi",
    desc: "Beberapa pilihanmu menyimpang dari prinsip At-Tasyawur, Al-'Adl, dan Tasamuh. Yuk, pelajari kembali materi Suara Demokrasi dan coba lagi!",
    mood: "sad" as const,
  };
}

// Confetti ringan tanpa dependency tambahan
function Confetti() {
  const pieces = Array.from({ length: 24 });
  const colors = ["#b8722e", "#5f7a52", "#e0964f", "#3f7a4f"];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {pieces.map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 0.6;
        const duration = 2 + Math.random() * 1.2;
        const color = colors[i % colors.length];
        return (
          <span
            key={i}
            className="absolute top-[-10px] h-2.5 w-1.5 rounded-sm"
            style={{
              left: `${left}%`,
              backgroundColor: color,
              animation: `confetti-fall ${duration}s ease-in ${delay}s forwards`,
            }}
          />
        );
      })}
      <style jsx>{`
        @keyframes confetti-fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(420px) rotate(340deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default function FinalResult({
  peserta,
  score,
  jawaban,
  onRestart,
}: {
  peserta: Peserta;
  score: number;
  jawaban: JawabanTahap[];
  onRestart: () => void;
}) {
  const pct = score / maxScore;
  const kategori = getKategori(pct);
  const [status, setStatus] = useState<"saving" | "saved" | "error">("saving");

  useEffect(() => {
    let cancelled = false;
    async function simpan() {
      const { error } = await supabase.from(TABLE_HASIL).insert({
        nama: peserta.nama,
        kelas: peserta.kelas,
        skor: score,
        max_skor: maxScore,
        kategori_hasil: kategori.title,
        jawaban_detail: jawaban,
      });
      if (cancelled) return;
      setStatus(error ? "error" : "saved");
    }
    simpan();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative w-full animate-fade-slide">
      {pct >= 0.8 && <Confetti />}
      <h1 className="mb-4 text-2xl font-bold tracking-tight text-ink">
        🗳️ Simulasi Pemilihan OSIM
      </h1>

      <div className="rounded-2xl border border-line bg-card p-6 text-center shadow-sm">
        <div className="mb-2 flex justify-center">
          <CharacterAvatar mood={kategori.mood} className="h-16 w-16" />
        </div>
        <div className="mb-2 text-5xl">{kategori.emoji}</div>
        <h2 className="mb-1 text-xl font-bold text-ink">{kategori.title}</h2>
        <p className="mb-1 text-sm text-sub">
          {peserta.nama} · {peserta.kelas}
        </p>
        <p className="mb-3 text-ink">
          Skor akhir kamu: <strong>{score} / {maxScore}</strong>
        </p>
        <p className="leading-relaxed text-sub">{kategori.desc}</p>

        <div className="mt-5 rounded-xl border border-accent/40 bg-accent/5 px-4 py-3 text-sm italic text-accent">
          Selamat, {peserta.nama}! Terima kasih sudah menuntaskan Simulasi Pemilihan OSIM.
          &ldquo;Suaramu adalah masa depan madrasahmu. Mari wujudkan iklim demokrasi yang aktif,
          santun, dan berintegritas!&rdquo;
        </div>

        <p className="mt-3 text-xs text-sub">
          {status === "saving" && "Menyimpan hasil kamu…"}
          {status === "saved" && "Hasil kamu sudah tersimpan ✅"}
          {status === "error" && "Gagal menyimpan hasil ke server, tapi kamu tetap bisa lihat hasilnya di sini."}
        </p>

        <button
          onClick={onRestart}
          className="mt-5 rounded-xl border border-accent px-5 py-3 font-medium text-accent transition-colors hover:bg-accent/10"
        >
          Main Lagi
        </button>
      </div>
    </div>
  );
}
