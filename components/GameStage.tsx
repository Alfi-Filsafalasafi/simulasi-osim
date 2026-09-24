"use client";

import { useState } from "react";
import { Stage, Choice } from "@/lib/types";
import ProgressPath from "./ProgressPath";

const feedbackStyle: Record<Choice["type"], string> = {
  good: "border-good/60 bg-good/10 text-good",
  bad: "border-bad/60 bg-bad/10 text-bad",
  neutral: "border-sub/60 bg-sub/10 text-sub",
};

const feedbackTitle: Record<Choice["type"], string> = {
  good: "✅ Jawaban Tepat!",
  bad: "❌ Kurang Tepat",
  neutral: "⚠️ Cukup, Tapi Bisa Lebih Baik",
};

export default function GameStage({
  stage,
  stageIndex,
  totalStages,
  score,
  onAnswer,
  onNext,
}: {
  stage: Stage;
  stageIndex: number;
  totalStages: number;
  score: number;
  onAnswer: (choice: Choice) => void;
  onNext: () => void;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);

  function handleCheck() {
    if (selected === null || checked) return;
    onAnswer(stage.choices[selected]);
    setChecked(true);
  }

  const chosen = selected !== null ? stage.choices[selected] : null;
  const isLast = stageIndex === totalStages - 1;

  return (
    <div className="w-full animate-fade-slide">
      <h1 className="mb-1 text-2xl font-bold tracking-tight text-ink">
        🗳️ Simulasi Pemilihan OSIM
      </h1>
      <p className="mb-4 text-sm text-sub">Skor saat ini: {score} poin</p>

      <ProgressPath current={stageIndex} total={totalStages} />

      <div className="rounded-2xl border border-line bg-card p-6 shadow-sm">
        <div className="mb-1 text-xs font-bold uppercase tracking-wider text-accent">
          {stage.label} dari {totalStages}
        </div>
        <h2 className="mb-3 text-lg font-semibold text-ink">{stage.title}</h2>
        <p className="mb-5 leading-relaxed text-ink/90">{stage.narrative}</p>

        <div className="flex flex-col gap-2.5">
          {stage.choices.map((c, idx) => (
            <button
              key={idx}
              disabled={checked}
              onClick={() => setSelected(idx)}
              className={`rounded-xl border px-4 py-3.5 text-left text-sm leading-snug transition-all
                ${
                  selected === idx
                    ? "border-accent bg-accent/10 ring-1 ring-accent"
                    : "border-line hover:border-accent hover:bg-accent/5"
                }
                ${checked && selected !== idx ? "opacity-50" : ""}
              `}
            >
              {c.text}
            </button>
          ))}
        </div>

        <button
          onClick={handleCheck}
          disabled={selected === null || checked}
          className="mt-5 w-full rounded-xl bg-accent px-5 py-3 font-medium text-white transition-transform active:scale-[0.98] disabled:opacity-40"
        >
          Cek Jawaban
        </button>
      </div>

      {/* Popup feedback */}
      {checked && chosen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 px-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-md animate-pop rounded-2xl border border-line bg-card p-6 shadow-xl">
            <h3 className="mb-3 text-lg font-bold text-ink">
              {feedbackTitle[chosen.type]}
            </h3>

            <div
              className={`rounded-xl border px-4 py-3.5 text-sm leading-relaxed ${feedbackStyle[chosen.type]}`}
            >
              {chosen.feedback}
            </div>

            <p className="mt-3 text-sm text-sub">
              Poin tahap ini:{" "}
              <strong className="text-ink">
                {chosen.points > 0 ? `+${chosen.points}` : chosen.points}
              </strong>
            </p>

            <button
              onClick={onNext}
              className="mt-5 w-full rounded-xl bg-accent px-5 py-3 font-medium text-white transition-transform active:scale-[0.98]"
            >
              {isLast ? "Lihat Hasil Akhir" : "Lanjut ke Soal Berikutnya"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}