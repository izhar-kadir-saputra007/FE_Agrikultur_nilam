const Footer = () => {
  return (
    <footer className="bg-color4 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Kontak */}
        <div className="text-center md:text-left">
          <h1 className="text-xl font-semibold text-white">Hubungi Kami</h1>
          <ul className="mt-4 text-sm text-gray-300 space-y-2">
            <li>
              <i className="ri-phone-line text-white mr-2"></i>+62 812 3456 789
            </li>
            <li>
              <i className="ri-map-pin-user-line text-white mr-2"></i>
              Jl. Tinaloga No.1, Toto Sel., Gorontalo 96128
            </li>
            <li>
              <i className="ri-mail-line text-white mr-2"></i>@Sapril@gmail.com
            </li>
          </ul>
        </div>

        {/* Tentang */}
        <div className="text-center md:text-left">
          <h1 className="text-xl font-semibold text-white">Tentang Kami</h1>
          <p className="mt-4 text-sm text-white -300 max-w-xs">Kami berkomitmen untuk memberikan informasi dan panduan terbaik mengenai budidaya tanaman nilam untuk petani Indonesia.</p>
        </div>

        {/* Sosial Media */}
        <div className="text-center">
          <h1 className="text-xl font-semibold text-white">Ikuti Kami</h1>
          <div className="flex justify-center mt-4 gap-4">
            <a href="#" className="text-white hover:text-white">
              <i className="ri-facebook-circle-line text-2xl"></i>
            </a>
            <a href="#" className="text-white hover:text-white">
              <i className="ri-instagram-line text-2xl"></i>
            </a>
            <a href="#" className="text-white hover:text-white">
              <i className="ri-twitter-line text-2xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-400 mt-6">
        <p>
          © 2024 <span className="text-white font-bold">Usaha Tani</span>. All rights reserved. Designed by <span className="text-white">Sapril</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
