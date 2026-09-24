"use client";

import CharacterAvatar from "./CharacterAvatar";

export default function ProgressPath({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  const pctPos = total > 1 ? (current / (total - 1)) * 100 : 0;
  const fillPct = total > 1 ? (Math.max(current - 1, 0) / (total - 1)) * 100 : 0;

  return (
    <div className="relative mb-6 pt-9">
      <div
        className="absolute -top-1 flex w-10 -translate-x-1/2 flex-col items-center transition-all duration-500 ease-out"
        style={{ left: `${pctPos}%` }}
      >
        <CharacterAvatar mood="neutral" className="w-7 h-7" />
      </div>
      <div className="relative h-1.5 rounded-full bg-line">
        <div
          className="absolute left-0 top-0 h-1.5 rounded-full bg-accent2 transition-all duration-500 ease-out"
          style={{ width: `${fillPct}%` }}
        />
      </div>

      <div className="mt-3 flex gap-1">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              i < current ? "bg-accent2" : i === current ? "bg-accent" : "bg-line"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
