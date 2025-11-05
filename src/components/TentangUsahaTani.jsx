import Vector1 from "../assets/images/Vektor1.png";

const TentangUsahaTani = () => {
  return (
    <div className="main bg-color1 py-10">
      <div className="container mx-auto">
        <div className="hero flex gap-10">
          <div className="box flex flex-col gap-3 p-6 w-full">
            <h1 className="text-3xl font-semibold">
              Analisis <span className="font-bold font-delius text-color3">Nilam</span>
            </h1>
            <h3 className="text-justify">
              Dengan menggunakan web ini, pengguna dapat memperoleh gambaran yang jelas tentang keuntungan, biaya, dan langkah-langkah yang perlu diambil dalam usaha tani nilam. Web ini juga membantu mempermudah pengambilan keputusan
              sehingga usaha tani dapat berjalan lebih efisien dan memberikan hasil yang lebih baik.
            </h3>
          </div>
          <div className="box">
            <img src={Vector1} alt="vector" className="w-[350px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TentangUsahaTani;
