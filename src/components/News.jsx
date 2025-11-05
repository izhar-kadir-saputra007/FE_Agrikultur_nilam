import nilam from "../../assets/images/nilam.jpg";
import nilam1 from "../../assets/images/nilam1.jpg";
import nilam2 from "../../assets/images/nilam2.jpg";
import nilam3 from "../../assets/images/nilam3.jpg";
import nilam4 from "../../assets/images/nilam4.jpg";
import nilam5 from "../../assets/images/nilam5.jpg";
const News = () => {
  return (
    <div className="bg-gray-50 pb-10">
      {/* Hero Section */}

      {/* Artikel Section */}
      <div className="container mx-auto p-10 pt-20 px-4">
        <div className="text-center pb-8">
          <h2 className="text-4xl font-semibold text-color4">Artikel Terkini</h2>
          <p className="text-gray-600 mt-2">Dapatkan wawasan terbaik mengenai budidaya tanaman nilam dan manfaatnya untuk keberlanjutan petani Indonesia.</p>
        </div>

        {/* Grid Artikel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            {
              img: nilam,
              title: "Artikel Mengenai Tanaman Nilam di Indonesia",
              link: "https://id.wikipedia.org/wiki/Nilam",
            },
            {
              img: nilam1,
              title: "11 Cara Menanam Nilam yang Benar (Panduan Lengkap)",
              link: "https://ilmubudidaya.com/cara-menanam-nilam",
            },
            {
              img: nilam2,
              title: "Budidaya Tanaman Nilam: Meningkatkan Keberlanjutan Petani",
              link: "https://www.kompasiana.com/ainuldwi0853549/668a9e08ed64151a86485734/budidaya-tanaman-nilam-meningkatkan-keberlanjutan-petani-indonesia-di-pasar-global",
            },
            {
              img: nilam3,
              title: "8 Kegunaan Tanaman Nilam: Menjanjikan untuk Dibudidayakan",
              link: "https://gdm.id/kegunaan-tanaman-nilam/",
            },
            {
              img: nilam4,
              title: "Minyak Nilam: Aroma Khas yang Berpotensi Memikat Pasar Global",
              link: "https://bisip.bsip.pertanian.go.id/berita/minyak-nilam-aroma-khas-yang-berpotensi-memikat-pasar-global#:~:text=Saat%20ini%2C%20minyak%20nilam%20mendominasi,ke%20tahun%20menjadi%20semakin%20nyata.",
            },
            {
              img: nilam5,
              title: "Minyak Nilam: Komoditas Berharga Harumkan Indonesia",
              link: "https://www.gematani.id/minyak-nilam-komoditas-berharga-yang-harumkan-indonesia-di-kancah-dunia/",
            },
          ].map((article, index) => (
            <a href={article.link} key={index} target="_blank" rel="noopener noreferrer" className="block group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all bg-white">
              {/* Animasi pada gambar */}
              <div className="relative overflow-hidden">
                <img src={article.img} alt="News Thumbnail" className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-color4 group-hover:text-color5 transition-colors">{article.title}</h3>
                <p className="text-sm text-gray-500 mt-2">Klik untuk membaca selengkapnya</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
