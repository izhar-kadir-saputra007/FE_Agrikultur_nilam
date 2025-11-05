import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar"; // Mengimpor Navbar
import Footer from "../components/Footer"; // Mengimpor Footer

const WelcomeScreen = ({ onAnalyze, onGuide }) => {
  return (
    <>
      {/* Navbar */}
      <Navbar /> {/* Navbar ditambahkan di sini */}
      <div className="relative w-full h-screen bg-gradient-to-b from-green-400 via-blue-500 to-blue-800 overflow-hidden">
        {/* Background Image */}
        <img src="https://images.unsplash.com/photo-1624033441874-82f56d494d83?q=80&w=1374&auto=format&fit=crop" alt="Perkebunan Nilam" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        {/* Kontainer Utama */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center shadow-lg shadow-black">
          <div className="max-w-2xl bg-white bg-opacity-80 p-8 rounded-xl shadow-lg backdrop-blur-lg">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">Selamat Datang! 🌿</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">Analisis Usahatani Tanaman Nilam</h2>
            <p className="text-gray-600 text-lg md:text-xl mb-6">Temukan potensi dan keuntungan usaha tani tanaman nilam Anda dengan fitur analisis kami. Siap memulai?</p>

            {/* Tombol Aksi */}
            <div className="flex gap-6 justify-center">
              <button
                onClick={() => (window.location.href = "http://127.0.0.1:8000")} // Mengarahkan ke URL eksternal
                className="px-8 py-4 bg-green-500 text-black text-lg font-bold rounded-lg shadow-lg hover:bg-green-600 hover:shadow-2xl hover:scale-105 transition-transform duration-300"
              >
                Lakukan Analisis
              </button>
              <NavLink to="/Panduan" className="px-8 py-4 bg-gray-200 text-gray-800 text-lg font-bold rounded-lg shadow-lg hover:bg-gray-300 hover:shadow-2xl hover:scale-105 transition-transform duration-300">
                Lihat Panduan
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer /> {/* Footer ditambahkan di sini */}
    </>
  );
};

export default WelcomeScreen;
