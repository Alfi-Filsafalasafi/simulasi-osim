export type FeedbackType = "good" | "bad" | "neutral";

export interface Choice {
  text: string;
  points: number;
  feedback: string;
  type: FeedbackType;
}

export interface Stage {
  label: string;
  title: string;
  narrative: string;
  choices: Choice[];
}

export interface JawabanTahap {
  tahap: string;
  pilihan: string;
  poin: number;
}

export interface Peserta {
  nama: string;
  kelas: string;
}

export const DAFTAR_KELAS = [
  "IX-A",
  "IX-B",
  "IX-C",
  "IX-D",
  "IX-E",
  "IX-F",
  "IX-G",
  "IX-H",
  "IX-I",
] as const;
