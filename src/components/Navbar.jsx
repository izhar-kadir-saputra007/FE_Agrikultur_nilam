import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "../assets/images/Logo.svg";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 5);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollAktif = scroll ? "bg-black bg-opacity-80 shadow-md" : "bg-black bg-opacity-50";

  return (
    <div className={`navbar fixed w-full z-50 transition-all ${scrollAktif}`}>
      <div className="container mx-auto px-12 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          {/* <img src={Logo} alt="logo" className="w-12 mr-3" />
          <h1 className="text-2xl md:text-4xl font-bold">
            <span className="text-color3 font-delius">Agrilens</span> <span className="text-color1 font-poppins">Nilam</span>
          </h1> */}
        </div>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex items-center">
          <ul className="flex gap-8 text-color1 text-lg">
            <li>
              <NavLink to="/" className={({ isActive }) => `hover:text-color3 hover:font-semibold transition-all ${isActive ? "text-color3 font-semibold" : ""}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/Welcome" className={({ isActive }) => `hover:text-color3 hover:font-semibold transition-all ${isActive ? "text-color3 font-semibold" : ""}`}>
                Analisis Usaha
              </NavLink>
            </li>
            <li>
              <NavLink to="/Harga" className={({ isActive }) => `hover:text-color3 hover:font-semibold transition-all ${isActive ? "text-color3 font-semibold" : ""}`}>
                Info
              </NavLink>
            </li>
            <li>
              <NavLink to="/News" className={({ isActive }) => `hover:text-color3 hover:font-semibold transition-all ${isActive ? "text-color3 font-semibold" : ""}`}>
                Artikel
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/Chat" className={({ isActive }) => `hover:text-color3 hover:font-semibold transition-all ${isActive ? "text-color3 font-semibold" : ""}`}>
                Forum
              </NavLink>
            </li> */}
          </ul>

          {/* Daftar Button */}
          {/* <button
            className="bg-color2 px-6 text-color1 py-3 rounded-full ml-4 font-semibold font-poppins border-4 border-color2 hover:bg-opacity-0 transition-all hover:scale-110"
            onClick={() => {
              window.location.href = "http://127.0.0.1:8000"; // Ganti dengan URL Laravel
            }}
          >
            Daftar
          </button> */}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-70 text-white absolute w-full top-0 left-0 p-6">
          <ul className="flex flex-col gap-6 text-lg">
            <li>
              <NavLink to="/" className={({ isActive }) => `hover:text-color3 hover:font-semibold transition-all ${isActive ? "text-color3 font-semibold" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/Welcome" className={({ isActive }) => `hover:text-color3 hover:font-semibold transition-all ${isActive ? "text-color3 font-semibold" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>
                Analisis Usaha
              </NavLink>
            </li>
            <li>
              <NavLink to="/Harga" className={({ isActive }) => `hover:text-color3 hover:font-semibold transition-all ${isActive ? "text-color3 font-semibold" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>
                Info
              </NavLink>
            </li>
            <li>
              <NavLink to="/News" className={({ isActive }) => `hover:text-color3 hover:font-semibold transition-all ${isActive ? "text-color3 font-semibold" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>
                Artikel
              </NavLink>
            </li>
            <li>
              <NavLink to="/Chat" className={({ isActive }) => `hover:text-color3 hover:font-semibold transition-all ${isActive ? "text-color3 font-semibold" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>
                Forum
              </NavLink>
            </li>
          </ul>

          {/* Daftar Button in Mobile */}
          {/* <button
            className="bg-color2 px-6 text-color1 py-3 rounded-full font-semibold font-poppins border-4 border-color2 hover:bg-opacity-0 transition-all hover:scale-110 mt-6"
            onClick={() => {
              window.location.href = "http://127.0.0.1:8000"; // Ganti dengan URL Laravel
            }}
          >
            Daftar
          </button> */}
        </div>
      )}
    </div>
  );
};

export default Navbar;
