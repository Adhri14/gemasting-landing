export default function AboutSection() {
  return (
    <section id="about" className="pt-20">
      <div className="container">
        <div className="flex flex-wrap border-gray-100 border-b pb-20">
          <div className="w-full self-center px-4 lg:w-1/2 mb-20 lg:mb-0">
            <img
              src="/img/about.png"
              alt="About"
              className="max-w-full lg:w3/4 mx-auto"
            />
          </div>
          <div className="w-full px-4 lg:w-1/2 lg:mt-20">
            <p className="text-base text-primary font-semibold">Tentang Kita</p>
            <h2 className="lg:text-4xl text-[24px] text-black mt-1 font-semibold">
              Tentang <span className="text-primary">Gemasting</span>
            </h2>
            <p className="text-sm lg:text-base mt-[30px] mb-[20px] text-gray-300">
              Gemasting merupakan inovasi berbasis mobile apps untuk menggerakan
              masyarakat (ibu dan bayi) sehingga sadar akan bahaya stunting
              (balita gagal tumbuh dan kembang). Edukasi ini dilakukan melalui
              pola asuh hidup sehat kepada ibu dan balita di Indonesia sehingga
              terciptanya generasi cerdas.{" "}
            </p>
            <p className="text-sm lg:text-base text-gray-300">
              Indonesia sudah saatnya memiliki generasi dengan kemampuan dan
              kompetensi yang dapat bersaing dengan seluruh penduduk dunia
              Internasional. Melalui Moto dengan Great and Measurable to Achieve
              Everything atau dalam arti bahasa Indonesia dengan "berfikir besar
              (Great) dan Melangkah secara terukur (Measurable) maka kita dapat
              meraih segala yang kita inginkan (Achieve Everything)."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
