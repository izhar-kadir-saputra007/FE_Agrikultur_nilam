import Petani from "../assets/images/Petani.png";
import JAGUNG from "../assets/images/JAGUNG.png";

const Contact = () => {
  return (
    <>
      <div className="contact grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="box bg-color1 flex flex-col md:flex-row-reverse gap-4">
          <div className="box kontak bg-white my-14 text-color4 p-8 md:p-12 rounded-l-lg shadow-md shadow-white w-full">
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-semibold font-delius text-color2 text-center md:text-left">Apakah ada pertanyaan?</h1>
              <p className="text-black font-bold text-3xl text-center md:text-left">Silahkan bertanya di bawah ini</p>
            </div>

            <div className="py-10">
              <form method="post" className="flex flex-col gap-6">
                <input type="text" placeholder="Name" className="border-2 border-color1 text-color4 py-3 rounded-xl w-full focus:border-color4 focus:outline-none px-4" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Email*" className="border-2 border-color1 text-color4 py-3 rounded-xl w-full focus:border-color4 focus:outline-none px-4" />
                  <input type="text" placeholder="Phone" className="border-2 border-color1 text-color4 py-3 rounded-xl w-full focus:border-color4 focus:outline-none px-4" />
                </div>
                <textarea placeholder="Silahkan masukan pertanyaan anda" className="block w-full text-sm text-color4 border-2 border-color1 rounded-xl focus:border-color4 focus:outline-none h-32 resize-none px-4 py-2"></textarea>

                <button type="submit" className="bg-color3 border-2 border-color3 text-white py-3 rounded-xl font-semibold font-poppins hover:opacity-80 hover:text-color3 hover:bg-opacity-0 transition-all hover:scale-105">
                  Kirim
                </button>
              </form>
            </div>
          </div>

          <div className="box py-12">
            <img src={Petani} alt="Petani" className="w-full h-auto object-cover" />
          </div>
        </div>

        <div className="box bg-color2 flex flex-col py-14 md:py-24 text-white relative">
          <div className="text-center md:text-left flex flex-col gap-6 font-poppins pl-8 pr-6 md:pl-32 md:pr-12">
            <h1 className="text-3xl md:text-5xl font-delius font-semibold">Contact Information</h1>
            <p className="text-base sm:text-lg">Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing.</p>
            <div>
              <p className="font-bold text-2xl">Hotline</p>
              <p>+62 123 456 789</p>
            </div>
            <div>
              <p className="font-bold text-2xl">Lokasi Kami</p>
              <p>Jl. Tinaloga No.1, Toto Sel., Kec. Kabila, Kabupaten Bone Bolango, Gorontalo 96128</p>
            </div>
            <div>
              <p className="font-bold text-2xl">Official Email</p>
              <p>Sapril@gmail.com</p>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 w-[120px] md:w-[150px]">
            <img src={JAGUNG} alt="jagung" className="w-full h-auto object-contain" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
