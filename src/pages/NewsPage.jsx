import Navbar from "../components/Navbar";
import News from "../components/News";
import Footer from "../components/Footer";

import React from "react";

const NewsPage = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="pt-20">
        <div className="relative bg-color4 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold">Artikel Tanaman Nilam</h1>
            <p className="text-lg mt-4">Selamat datang di portal artikel tanaman nilam! Di sini Anda akan menemukan informasi terkini, panduan budidaya, dan potensi besar tanaman nilam di Indonesia.</p>
          </div>
        </div>
        <News />
      </div>
      <Footer />
    </>
  );
};

export default NewsPage;
