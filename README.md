# Simulasi Pemilihan OSIM

Next.js 14 (App Router) + Tailwind CSS + Supabase.

## Setup

1. `npm install`
2. Buat file `.env.local` dari `.env.local.example`, isi dengan URL & anon key project Supabase kamu.
3. Buat tabel di Supabase (SQL Editor):

```sql
create table hasil_pemilihan_osim (
  id uuid default gen_random_uuid() primary key,
  nama text not null,
  kelas text not null,
  skor int not null,
  max_skor int not null,
  kategori_hasil text not null,
  jawaban_detail jsonb,
  created_at timestamptz default now()
);

-- Kalau RLS aktif, izinkan insert & select publik (sesuaikan sesuai kebutuhan keamanan):
alter table hasil_pemilihan_osim enable row level security;
create policy "insert publik" on hasil_pemilihan_osim for insert with check (true);
create policy "select publik" on hasil_pemilihan_osim for select using (true);
```

4. Taruh file musik backsound kamu di `public/audio/backsound.mp3` (format mp3, ukuran kecil disarankan).
5. `npm run dev` → buka `http://localhost:3000`
6. Halaman export: `http://localhost:3000/export`

## Struktur

- `app/page.tsx` — alur utama: form nama+kelas → 8 tahap simulasi → hasil akhir (auto-simpan ke Supabase)
- `app/export/page.tsx` — tabel rekap hasil + download CSV/Excel
- `components/` — semua UI dipecah per bagian
- `lib/stages.ts` — data 8 tahap & pilihan (edit di sini kalau mau ubah skenario)
- `lib/supabaseClient.ts` — koneksi Supabase & nama tabel

## Catatan

- Musik backsound baru bisa autoplay setelah interaksi pertama pengguna (klik di mana pun), ini pembatasan browser bukan bug. Tombol 🔇/🔊 di pojok kanan bawah untuk toggle manual.
- Kalau file `public/audio/backsound.mp3` belum ada, tombol musik tetap muncul tapi tidak akan bersuara — tinggal taruh file mp3-nya di situ.
