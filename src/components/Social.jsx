import SocialImage from "../assets/images/Social Image.png";
import SocialImage1 from "../assets/images/Social Image2.png";
import SocialImage2 from "../assets/images/Social Image 3.png";

const Social = () => {
  return (
    <div className="social bg-gradient-to-r from-blue-600 via-teal-500 to-green-500 py-20">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide mb-4">Komunitas Sosial Petani Nilam Profesional Indonesia</h3>
          {/* <p className="text-lg md:text-xl text-gray-100 font-light max-w-3xl mx-auto leading-relaxed">
            Jelajahi pencapaian dan aktivitas sosial para petani nilam profesional di seluruh Indonesia. Bergabunglah dalam komunitas yang mendukung inovasi dan pertumbuhan usaha tani nilam.
          </p> */}
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          {/* <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg transform transition-transform duration-300 hover:scale-105">
            <img src={SocialImage} alt="Social achievement 1" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="p-6">
              <h4 className="text-2xl font-semibold text-gray-800 mb-3 group-hover:text-green-500 transition-colors">Prestasi 1</h4>
              <p className="text-gray-600">"Bergabunglah dengan komunitas petani nilam profesional dan temukan inspirasi dari para ahli di bidangnya. Bersama kita tumbuh, bersama kita sukses!"</p>
            </div> */}
          {/* </div> */}

          {/* Card 2 */}
          {/* <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg transform transition-transform duration-300 hover:scale-105">
            <img src={SocialImage1} alt="Social achievement 2" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="p-6">
              <h4 className="text-2xl font-semibold text-gray-800 mb-3 group-hover:text-green-500 transition-colors">Prestasi 2</h4>
              <p className="text-gray-600">"Komunitas petani nilam profesional, tempat berbagi pengetahuan, pengalaman, dan inovasi untuk masa depan yang lebih hijau!"</p>
            </div>
          </div> */}

          {/* Card 3 */}
          {/* <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg transform transition-transform duration-300 hover:scale-105">
            <img src={SocialImage2} alt="Social achievement 3" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="p-6">
              <h4 className="text-2xl font-semibold text-gray-800 mb-3 group-hover:text-green-500 transition-colors">Prestasi 3</h4>
              <p className="text-gray-600">"Petani nilam sejati berkolaborasi untuk kemajuan. Yuk, gabung dengan kami dan temukan peluang baru dalam dunia usaha tani nilam!"</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Social;
