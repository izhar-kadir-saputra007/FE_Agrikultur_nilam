import Vector from "../assets/images/Vector.png";

const TentangNilam = () => {
  return (
    <div className="main bg-color1 py-10">
      <div className="container mx-auto">
        <div className="hero flex gap-10 items-start">
          <div className="box">
            <img src={Vector} alt="vector" className="w-[350px]" />
          </div>
          <div className="box flex flex-col gap-3 p-6 w-full">
            <h1 className="text-3xl font-semibold">
              Analisis <span className="font-bold font-delius text-color3">Nilam</span>
            </h1>
            <h3 className="text-justify">
              Web ini dibuat untuk membantu petani dan pelaku usaha memahami dan mengelola usaha tani tanaman nilam dengan lebih mudah. Web ini bertujuan menyediakan informasi yang dapat digunakan untuk merencanakan, menjalankan, dan
              mengevaluasi usaha tani nilam.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TentangNilam;
