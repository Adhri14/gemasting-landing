export default function JumbotronSection() {
  return (
    <section className="pt-20 mb-28">
      <div className="container">
        <div className="flex flex-wrap rounded-3xl bg-primary overflow-hidden">
          <div className="w-full self-center lg:w-1/2 p-[50px]">
            <h1 className="font-bold text-[20px] lg:text-4xl text-white">
              Perhatikan Kesehatan Keluarga <br /> anda Bersama Gemasting
            </h1>
            <p className="text-gray-300 mt-[20px] text-smlg:text-base">
              Download aplikasi gemasting untuk konsultasi mengenai <br />{" "}
              kesehatan keluarga anda dengan dokter yang sudah <br />{" "}
              berpengalaman
            </p>
            <div className="flex w-full mt-10">
              <a href="https://play.google.com/store/apps/details?id=com.gemasting.app">
                <img
                  src="/img/Badge.png"
                  alt="Button"
                  width={170}
                  height={50}
                />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-10">
            <img
              src="/img/footer.png"
              alt="Footer"
              className="max-w-full h-[414px] lg:w3/4 mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
