export default function HeroSection() {
  return (
    <section id="home" className="pt-36 min-h-screen">
      <div className="container">
        <div className="flex flex-wrap border-b border-gray-100 pb-20 lg:pb-20">
          <div className="w-full px-4 lg:w-1/2 lg:mt-20">
            <h1 className="font-bold lg:text-[40px] text-[25px] lg:text-4xl text-slate-900">
              Perhatikan <span className="text-primary">Kesehatan</span> <br />{" "}
              Keluarga anda Bersama <br /> Gemasting
            </h1>
            <p className="text-gray-300 mt-10 text-sm lg:text-base">
              Gemasting adalah aplikasi kesehatan yang membantu orang tua <br />{" "}
              untuk memperhatikan perkambangan anak dan mencegah masalah
              stunting <br /> pada anak
            </p>
            <div className="flex w-full mt-10">
              <a
                href="https://play.google.com/store/apps/details?id=com.gemasting.app"
                // className="w-1/2"
              >
                <img
                  src="/img/Badge.png"
                  alt="Button"
                  width={170}
                  height={50}
                />
              </a>
              <a
                href="#service"
                className="px-5 ml-5 text-primary justify-center flex items-center my-auto h-full "
              >
                Selengkapnya
                <img src="/img/arrow.svg" alt="Arrow" />
              </a>
            </div>
          </div>
          <div className="w-full self-center lg:pt-0 pt-10 px-4 lg:w-1/2 mt-20 lg:mt-0">
            <img
              src="/img/hero.png"
              alt="Hero"
              className="max-w-full lg:w3/4 mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
