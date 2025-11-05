import React, { useState } from "react";

const Panduan = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Pendahuluan",
      content: `Selamat datang di Panduan Pengguna aplikasi Analisis Usaha Tani Tanaman Nilam. 
      Panduan ini membantu Anda memahami fitur-fitur utama seperti pendaftaran, analisis usaha tani, riwayat analisis, info harga, artikel terkini, dan forum interaksi. 
      Dengan panduan ini, Anda akan lebih mudah memanfaatkan seluruh fitur yang tersedia.`,
    },
    {
      title: "Panduan Daftar",
      content: `1. Klik tombol 'Daftar' di pojok kanan atas halaman utama.
      2. Isi formulir dengan informasi seperti nama, email, dan kata sandi.
      3. Klik tombol 'Submit' untuk menyelesaikan pendaftaran.
      4. Cek email Anda untuk verifikasi akun dan login ke aplikasi.`,
    },
    {
      title: "Panduan Analisis Usaha",
      content: `1. Masuk ke fitur "Analisis" pada menu utama.
      2. Masukkan data usaha tani seperti luas lahan, jenis bibit, jumlah pupuk, dan hasil panen.
      3. Klik tombol "Analisis" untuk melihat hasil evaluasi usaha tani menggunakan metode WISDM.
      4. Lihat hasil analisis seperti estimasi keuntungan, efisiensi biaya, dan rekomendasi perbaikan.
      5. Semua hasil akan otomatis tersimpan di bagian "Riwayat Analisis".`,
    },
    {
      title: "Panduan Info",
      content: `1. Masuk ke fitur "Info" melalui menu utama.
      2. Anda dapat melihat daftar harga terkini seperti:
         - Harga bibit nilam berdasarkan grade.
         - Harga pupuk (organik dan kimia).
         - Harga minyak nilam di pasar Gorontalo.
      3. Informasi ini diperbarui secara berkala untuk membantu perencanaan usaha Anda.`,
    },
    {
      title: "Panduan Artikel",
      content: `1. Klik menu "Artikel" pada navbar.
      2. Anda akan menemukan artikel terkini tentang budidaya, manfaat, dan peluang bisnis tanaman nilam.
      3. Klik salah satu artikel untuk membaca detailnya.`,
    },
    {
      title: "Panduan Forum",
      content: `1. Klik menu "Forum" untuk mengakses fitur interaksi antar pengguna.
      2. Anda dapat:
         - Membuat topik diskusi baru terkait tanaman nilam.
         - Menanggapi atau memberikan komentar pada diskusi pengguna lain.
         - Menggunakan fitur pencarian untuk menemukan topik tertentu.
      3. Forum ini dirancang untuk saling berbagi pengalaman dan solusi.`,
    },
    {
      title: "Hubungi Kami",
      content: `Jika Anda mengalami kendala atau membutuhkan bantuan:
      - Email: support@usahatani.com
      - Telepon: +62 812-3456-7890
      - Jam Layanan: Senin - Jumat, 09.00 - 17.00 WIB`,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-color4 text-white py-16 text-center">
        <h1 className="text-5xl font-bold">Panduan Pengguna</h1>
        <p className="text-lg mt-4">Selamat datang! Pelajari langkah-langkah mudah untuk memaksimalkan penggunaan aplikasi analisis usaha tani nilam.</p>
      </div>

      {/* Tab Navigation */}
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-wrap justify-center mb-8">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 mx-2 text-lg font-medium border-b-4 ${activeTab === index ? "text-color3 border-color3" : "text-gray-500 border-transparent hover:text-color3 hover:border-gray-300"} transition-all`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-6 bg-white shadow-md rounded-lg max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 whitespace-pre-line">{tabs[activeTab].content}</p>
        </div>
      </div>
    </div>
  );
};

export default Panduan;
