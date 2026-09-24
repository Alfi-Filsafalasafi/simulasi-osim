"use client";

import { useState } from "react";
import { stages } from "@/lib/stages";
import { Choice, JawabanTahap, Peserta } from "@/lib/types";
import StudentForm from "@/components/StudentForm";
import GameStage from "@/components/GameStage";
import FinalResult from "@/components/FinalResult";

type Screen = "form" | "game" | "final";

export default function Home() {
  const [screen, setScreen] = useState<Screen>("form");
  const [peserta, setPeserta] = useState<Peserta | null>(null);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [jawaban, setJawaban] = useState<JawabanTahap[]>([]);
  const [pendingAnswer, setPendingAnswer] = useState<Choice | null>(null);

  function handleStart(p: Peserta) {
    setPeserta(p);
    setCurrent(0);
    setScore(0);
    setJawaban([]);
    setScreen("game");
  }

  function handleAnswer(choice: Choice) {
    setPendingAnswer(choice);
    setScore((s) => s + choice.points);
  }

  function handleNext() {
    if (pendingAnswer) {
      setJawaban((prev) => [
        ...prev,
        {
          tahap: stages[current].title,
          pilihan: pendingAnswer.text,
          poin: pendingAnswer.points,
        },
      ]);
    }
    setPendingAnswer(null);

    if (current === stages.length - 1) {
      setScreen("final");
    } else {
      setCurrent((c) => c + 1);
    }
  }

  function handleRestart() {
    setScreen("form");
    setPeserta(null);
  }

  return (
    <main className="flex min-h-screen justify-center bg-bg px-4 py-8">
      <div className="w-full max-w-xl">
        {screen === "form" && <StudentForm onSubmit={handleStart} />}

        {screen === "game" && (
          <GameStage
           key={current} 
            stage={stages[current]}
            stageIndex={current}
            totalStages={stages.length}
            score={score}
            onAnswer={handleAnswer}
            onNext={handleNext}
          />
        )}

        {screen === "final" && peserta && (
          <FinalResult
            peserta={peserta}
            score={score}
            jawaban={jawaban}
            onRestart={handleRestart}
          />
        )}
      </div>
    </main>
  );
}
