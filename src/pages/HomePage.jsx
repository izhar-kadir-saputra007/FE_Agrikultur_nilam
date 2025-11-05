import NilamImage from "../assets/images/Nilam Image.png";
import HeroImage from "../assets/images/Hero Image.png";
import News from "../components/News";
import TentangNilam from "../components/TentangNilam";
import TentangUsahaTani from "../components/TentangUsahaTani";
import Social from "../components/Social";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="home">
        <div className="bg-cover h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center" style={{ backgroundImage: `url(${NilamImage})` }}>
          <div className="text-center px-6 mt-16">
            <h1 className="text-color1 text-3xl md:text-4xl lg:text-5xl font-bold">
              Selamat Datang di <span className="text-color3">Analisis Usaha tani Nilam</span>
            </h1>
            <p className="text-color1 mt-4 max-w-3xl mx-auto text-justify text-sm sm:text-base md:text-lg">
              AgriLens merupakan sebuah platform digital yang dirancang untuk memberikan perspektif baru dalam melihat dan menganalisis usaha tani melalui lensa teknologi. Nama ini mencerminkan tujuan utama web, yaitu membantu petani dan
              pelaku usaha tani untuk memahami data, mengoptimalkan proses, serta meningkatkan efisiensi usaha tani mereka dengan pendekatan berbasis teknologi modern. Dengan AgriLens, setiap aspek usaha tani—mulai dari perencanaan,
              pengelolaan, hingga analisis hasil—dapat ditinjau secara menyeluruh dan inovatif, memberikan wawasan yang mendalam untuk mendukung pengambilan keputusan yang lebih baik.
            </p>
          </div>
        </div>
      </div>
      {/* Tentang Nilam Section */}
      <TentangNilam />
      {/* Tentang Usaha Tani Section */}
      <div className="mt-5">
        <TentangUsahaTani />
      </div>
      {/* Social Links */}
      <Social />
      {/* News Section */}
      <News />
      {/* Second Hero Section */}
      {/* <div className="hero py-24">
        <div className="bg-cover h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center" style={{ backgroundImage: `url(${HeroImage})` }}>
          <div className="text-center px-6">
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
              Be <span className="text-color2">Healthy</span> & Eat Only <span className="text-color3">Fresh Organic Vegetables</span>
            </h1>
          </div>
        </div>
      </div> */}
      {/* About Section */}
      <About />
      {/* Contact Section */}
      <Contact />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default HomePage;
