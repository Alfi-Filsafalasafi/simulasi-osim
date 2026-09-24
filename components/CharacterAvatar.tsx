type Mood = "neutral" | "happy" | "sad";

export default function CharacterAvatar({
  mood = "neutral",
  className = "w-14 h-14",
}: {
  mood?: Mood;
  className?: string;
}) {
  const mouth =
    mood === "happy"
      ? "M20 33 Q28 40 36 33"
      : mood === "sad"
      ? "M20 36 Q28 30 36 36"
      : "M20 34 Q28 36 36 34";

  return (
    <svg viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="28" cy="28" r="27" fill="var(--accent)" opacity="0.15" />
      <ellipse cx="28" cy="46" rx="16" ry="8" fill="var(--accent2)" />
      <circle cx="28" cy="24" r="14" fill="#f0c9a0" />
      <path d="M14 20 Q28 6 42 20 Q42 12 28 10 Q14 12 14 20 Z" fill="var(--accent)" />
      <circle cx="22" cy="24" r="1.8" fill="#2b241b" />
      <circle cx="34" cy="24" r="1.8" fill="#2b241b" />
      <path d={mouth} stroke="#2b241b" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    </svg>
  );
}
