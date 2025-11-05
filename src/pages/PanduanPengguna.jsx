import Navbar from "../components/Navbar";
import Panduan from "../components/Panduan";
import Footer from "../components/Footer";
import React from "react";

const PanduanPengguna = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="pt-20">
        <Panduan />
      </div>
      <Footer />
    </>
  );
};

export default PanduanPengguna;
