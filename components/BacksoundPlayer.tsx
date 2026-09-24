"use client";

import { useEffect, useRef, useState } from "react";

// Browser modern memblokir autoplay audio dengan suara sebelum ada interaksi
// dari pengguna. Jadi kita mulai dalam kondisi "siap main tapi silent", lalu
// begin play begitu pengguna klik tombol atau melakukan interaksi pertama.
export default function BacksoundPlayer({ src = "/audio/backsound.mp3" }: { src?: string }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = 0.35;
    audioRef.current = audio;
    setReady(true);

    function startOnFirstInteraction() {
      if (!audioRef.current) return;
      audioRef.current
        .play()
        .then(() => setPlaying(true))
        .catch(() => {
          /* biarkan user tekan tombol manual jika autoplay ditolak */
        });
      window.removeEventListener("click", startOnFirstInteraction);
    }
    window.addEventListener("click", startOnFirstInteraction, { once: true });

    return () => {
      audio.pause();
      window.removeEventListener("click", startOnFirstInteraction);
    };
  }, [src]);

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true));
    }
  }

  if (!ready) return null;

  return (
    <button
      onClick={toggle}
      aria-label={playing ? "Matikan musik" : "Nyalakan musik"}
      className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-line bg-card text-lg shadow-md transition-transform active:scale-95"
      title={playing ? "Matikan musik" : "Nyalakan musik"}
    >
      {playing ? "🔊" : "🔇"}
    </button>
  );
}
