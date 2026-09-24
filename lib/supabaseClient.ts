import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  // eslint-disable-next-line no-console
  console.warn(
    "Supabase belum dikonfigurasi. Isi NEXT_PUBLIC_SUPABASE_URL dan NEXT_PUBLIC_SUPABASE_ANON_KEY di .env.local"
  );
}

export const supabase = createClient(
  supabaseUrl || "https://placeholder.supabase.co",
  supabaseAnonKey || "placeholder-anon-key"
);

// Nama tabel Supabase yang dipakai untuk menyimpan hasil simulasi.
// Skema kolom:
//   id uuid default gen_random_uuid() primary key
//   nama text not null
//   kelas text not null
//   skor int not null
//   max_skor int not null
//   kategori_hasil text not null
//   jawaban_detail jsonb
//   created_at timestamptz default now()
export const TABLE_HASIL = "hasil_pemilihan_osim";
