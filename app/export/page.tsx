import ExportTable from "@/components/ExportTable";

export default function ExportPage() {
  return (
    <main className="min-h-screen bg-bg px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-1 text-2xl font-bold tracking-tight text-ink">
          Export Hasil Simulasi OSIM
        </h1>
        <p className="mb-6 text-sm text-sub">
          Rekap seluruh hasil simulasi yang tersimpan di Supabase.
        </p>
        <ExportTable />
      </div>
    </main>
  );
}
