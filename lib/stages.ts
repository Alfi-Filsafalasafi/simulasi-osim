import { Stage } from "./types";

export const stages: Stage[] = [
  {
    label: "Tahap 1",
    title: "Penjaringan / Pendaftaran Bakal Calon",
    narrative:
      "Panitia OSIM membuka pendaftaran calon ketua. Temanmu, Farel, mengajakmu ikut mendaftar bersama, tapi kamu ragu karena belum pernah berorganisasi. Di sisi lain, Dinda—siswa kelas 8 yang aktif di ekskul—juga berencana mendaftar.",
    choices: [
      {
        text: "Mendaftar karena yakin bisa belajar sambil menjalankan amanah",
        points: 2,
        feedback:
          "Bagus! Keberanian untuk berkontribusi adalah awal dari sikap kepemimpinan yang baik, selama diiringi kesiapan belajar.",
        type: "good",
      },
      {
        text: "Tidak mendaftar, tapi mendukung penuh siapa pun yang maju",
        points: 1,
        feedback:
          "Tidak masalah — tidak semua orang harus menjadi calon. Yang penting kamu tetap terlibat aktif sebagai pemilih yang baik.",
        type: "neutral",
      },
      {
        text: "Menyindir Dinda di media sosial supaya dia mundur",
        points: -2,
        feedback:
          "Ini bertentangan dengan nilai Al-Hurriyah dan Tasamuh. Kompetisi yang sehat tidak dimulai dengan menjatuhkan orang lain.",
        type: "bad",
      },
    ],
  },
  {
    label: "Tahap 2",
    title: "Verifikasi & Penetapan Calon",
    narrative:
      "Kamu menjadi salah satu calon resmi. Saat verifikasi berkas, kamu menyadari salah satu syaratmu (misalnya nilai akhlak) sedikit kurang memenuhi standar panitia.",
    choices: [
      {
        text: "Jujur melapor ke panitia dan menerima hasil verifikasi apa adanya",
        points: 2,
        feedback:
          "Tepat sekali. Kejujuran adalah fondasi dari syura — keputusan yang baik lahir dari proses yang jujur dan transparan.",
        type: "good",
      },
      {
        text: "Mencoba memalsukan tanda tangan wali kelas agar berkasmu lolos",
        points: -3,
        feedback:
          "Ini pelanggaran serius terhadap Al-'Adl (keadilan) dan kejujuran. Demokrasi yang sehat dibangun di atas proses yang bersih, bukan kecurangan.",
        type: "bad",
      },
      {
        text: "Diam saja dan berharap panitia tidak memeriksa detail",
        points: -1,
        feedback:
          "Bersikap pasif terhadap masalah bukan solusi. Lebih baik proaktif dan terbuka kepada panitia.",
        type: "neutral",
      },
    ],
  },
  {
    label: "Tahap 3",
    title: "Penyampaian Visi & Misi",
    narrative:
      "Hari orasi tiba. Kamu berdiri di depan seluruh siswa untuk menyampaikan visi-misi. Kamu punya waktu terbatas dan harus memilih fokus pidatomu.",
    choices: [
      {
        text: "Menyampaikan program kerja konkret yang realistis untuk madrasah",
        points: 2,
        feedback:
          "Pilihan yang bijak. Pidato yang berisi program nyata menunjukkan kesiapan dan tanggung jawab calon pemimpin.",
        type: "good",
      },
      {
        text: "Menjanjikan hal-hal berlebihan agar terdengar menarik meski sulit direalisasikan",
        points: -1,
        feedback:
          "Janji yang tidak realistis bisa mengecewakan pemilih dan merusak kepercayaan — bagian penting dari akhlakul karimah.",
        type: "bad",
      },
      {
        text: "Menyindir program calon lain agar dirimu terlihat lebih unggul",
        points: -2,
        feedback:
          "Ini melanggar semangat Tasyawur dan Tasamuh. Kampanye yang sehat fokus pada gagasan, bukan menjatuhkan lawan.",
        type: "bad",
      },
    ],
  },
  {
    label: "Tahap 4",
    title: "Debat Kandidat",
    narrative:
      "Sesi debat berlangsung sengit. Salah satu pendukung lawan melontarkan pertanyaan yang cukup menyudutkanmu di depan semua siswa.",
    choices: [
      {
        text: "Menjawab dengan tenang dan data, tanpa terpancing emosi",
        points: 2,
        feedback:
          "Sikap ini mencerminkan Al-Hurriyah yang bertanggung jawab — berani berargumen namun tetap santun.",
        type: "good",
      },
      {
        text: "Membalas dengan sindiran pribadi ke pendukung lawan",
        points: -2,
        feedback:
          "Debat yang sehat bukan ajang saling menjatuhkan. Ini bertentangan dengan nilai adu argumen sehat yang diajarkan.",
        type: "bad",
      },
      {
        text: "Diam dan menghindari pertanyaan itu",
        points: -1,
        feedback:
          "Menghindar dari pertanyaan sulit justru mengurangi kepercayaan pemilih terhadap keterbukaanmu.",
        type: "neutral",
      },
    ],
  },
  {
    label: "Tahap 5",
    title: "Masa Tenang",
    narrative:
      "Kampanye resmi berakhir. Ini adalah masa tenang bagi seluruh siswa untuk merenungkan pilihan mereka tanpa pengaruh dari luar. Namun, ada teman yang mengajakmu diam-diam menyebarkan pesan berantai di grup kelas untuk memilih kandidat tertentu.",
    choices: [
      {
        text: "Menolak ajakan itu dan menjaga masa tenang sesuai aturan",
        points: 2,
        feedback:
          "Tepat! Menghormati masa tenang adalah bagian dari sikap LUBER JURDIL dan integritas pemilih.",
        type: "good",
      },
      {
        text: "Ikut menyebarkan pesan itu karena merasa 'cuma sekali ini saja'",
        points: -2,
        feedback:
          "Melanggar masa tenang merusak kejujuran proses pemilu, sekecil apa pun alasannya.",
        type: "bad",
      },
      {
        text: "Tidak ikut menyebarkan, tapi juga tidak menegur temanmu",
        points: 0,
        feedback:
          "Setidaknya kamu tidak ikut melanggar aturan — namun menegur dengan baik akan lebih mencerminkan sikap kritis yang sehat.",
        type: "neutral",
      },
    ],
  },
  {
    label: "Tahap 6",
    title: "Pemungutan Suara",
    narrative:
      "Hari pemilihan tiba. Di bilik TPS madrasah, seorang adik kelas menawarimu uang jajan tambahan jika kamu mau memilih kandidat tertentu.",
    choices: [
      {
        text: "Menolak tegas dan memilih sesuai hati nurani",
        points: 2,
        feedback:
          "Sikap ini adalah wujud nyata menolak politik uang — pilar penting dalam pemilu yang jujur dan adil.",
        type: "good",
      },
      {
        text: "Menerima tawaran itu karena 'toh cuma jajan kecil'",
        points: -3,
        feedback:
          "Sekecil apa pun bentuknya, menerima imbalan untuk memilih adalah politik uang yang harus ditolak sepenuhnya.",
        type: "bad",
      },
      {
        text: "Menolak, lalu melaporkan kejadian ini ke panitia TPS",
        points: 3,
        feedback:
          "Luar biasa! Selain menolak, kamu juga menjaga integritas pemilu secara aktif — ini sikap pemilih cerdas yang sesungguhnya.",
        type: "good",
      },
    ],
  },
  {
    label: "Tahap 7",
    title: "Penghitungan Suara & Rekapitulasi",
    narrative:
      "Penghitungan suara berlangsung terbuka. Hasil sementara menunjukkan kandidat pilihanmu tertinggal cukup jauh. Salah satu saksi dari kubu 'lawan' mengajakmu menyebarkan kabar bahwa penghitungan ini curang, padahal kamu tidak melihat bukti kecurangan apa pun.",
    choices: [
      {
        text: "Menolak menyebarkan tuduhan tanpa bukti dan tetap mengawal proses secara terbuka",
        points: 3,
        feedback:
          "Sangat baik. Anti hoaks dan fitnah adalah prinsip penting agar demokrasi madrasah tetap sehat dan dipercaya semua pihak.",
        type: "good",
      },
      {
        text: "Ikut menyebarkan kabar itu karena kecewa dengan hasil sementara",
        points: -3,
        feedback:
          "Menyebarkan tuduhan tanpa bukti adalah fitnah yang bisa merusak kerukunan dan kepercayaan antar siswa.",
        type: "bad",
      },
      {
        text: "Diam saja tanpa mengecek kebenaran informasi lebih lanjut",
        points: -1,
        feedback:
          "Sikap pasif terhadap potensi hoaks tetap berisiko — lebih baik mengklarifikasi ke panitia jika ada keraguan.",
        type: "neutral",
      },
    ],
  },
  {
    label: "Tahap 8",
    title: "Pelantikan Pengurus Baru",
    narrative:
      "Hasil akhir diumumkan. Kandidat yang kamu dukung tidak terpilih sebagai Ketua OSIM. Kini saatnya pelantikan pengurus baru berlangsung di hadapan seluruh siswa.",
    choices: [
      {
        text: "Menerima hasil dengan lapang dada dan mendukung pengurus baru",
        points: 3,
        feedback:
          "Ini adalah sikap Legowo yang sesungguhnya — kunci menjaga kerukunan dan kemajuan madrasah bersama.",
        type: "good",
      },
      {
        text: "Menerima secara terbuka, tapi diam-diam tetap enggan bekerja sama",
        points: 0,
        feedback:
          "Menerima secara lisan saja belum cukup. Dukungan yang tulus perlu ditunjukkan lewat kerja sama nyata.",
        type: "neutral",
      },
      {
        text: "Menolak mengakui hasil dan mengajak teman-teman untuk memboikot kepengurusan baru",
        points: -3,
        feedback:
          "Sikap ini merusak persatuan yang justru menjadi tujuan utama dari demokrasi madrasah.",
        type: "bad",
      },
    ],
  },
];

export const maxScore = stages.reduce(
  (sum, s) => sum + Math.max(...s.choices.map((c) => c.points)),
  0
);
