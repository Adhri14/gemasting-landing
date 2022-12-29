export default function DetailSection() {
    return (
        <section className="pt-20 lg:block hidden">
            <div className="container">
                <div className="flex flex-wrap border-b border-gray-100 pb-20 lg:pb-20">
                    <div className="w-full px-4 lg:w-1/2 lg:mt-20">
                        <h1 className="font-bold text-3xl lg:text-4xl text-slate-900">
                            <span className="text-primary">Konsultasi</span>{" "}
                            dengan dokter <br />
                            yang berpengalaman.
                        </h1>
                        <div className="mt-[78px]">
                            <div className="justify-between flex flex-col relative h-[241px]">
                                <div className="flex absolute top-0 left-[2px]">
                                    <div className="bg-[#65E0A4] w-[40px] h-[30px] lg:w-[35px] lg:h-[35px] rounded-full justify-center items-center flex text-white text-xs lg:text-base">
                                        1
                                    </div>
                                    <div className="ml-3">
                                        <h4 className="text-[18px] text-black font-medium">
                                            Pilih ratusan dokter berpengalaman
                                        </h4>
                                        <p className="text-[14px] text-gray-300">
                                            Pilih dari ratusan dokter yang
                                            berpengalaman sesuai dengan{" "}
                                            <br className="lg:block hidden" />
                                            yang anda butuhkan
                                        </p>
                                    </div>
                                </div>
                                <div className="justify-center items-center flex w-[35px] h-[241px] absolute -z-10">
                                    <img
                                        src="/icon/line.svg"
                                        alt="Line"
                                        className="absolute -z-10 lg:h-[241px] h-[250px] lg:top-0 top-[1px]"
                                    />
                                </div>
                                <div className="flex absolute bottom-[65px] left-[2px]">
                                    <div className="bg-[#65E0A4] w-[40px] h-[30px] lg:w-[35px] lg:h-[35px] rounded-full justify-center items-center flex text-white text-xs lg:text-base">
                                        2
                                    </div>
                                    <div className="ml-3">
                                        <h4 className="text-[18px] text-black font-medium">
                                            Pilih ratusan dokter berpengalaman
                                        </h4>
                                        <p className="text-[14px] text-gray-300">
                                            Pilih dari ratusan dokter yang
                                            berpengalaman sesuai dengan{" "}
                                            <br className="lg:block hidden" />
                                            yang anda butuhkan
                                        </p>
                                    </div>
                                </div>
                                <div className="flex absolute -bottom-10 left-[2px]">
                                    <div className="bg-[#65E0A4] w-[40px] h-[30px] lg:w-[35px] lg:h-[35px] rounded-full justify-center items-center flex text-white text-xs lg:text-base">
                                        3
                                    </div>
                                    <div className="ml-3">
                                        <h4 className="text-[18px] text-black font-medium">
                                            Pilih ratusan dokter berpengalaman
                                        </h4>
                                        <p className="text-[14px] text-gray-300">
                                            Pilih dari ratusan dokter yang
                                            berpengalaman sesuai dengan{" "}
                                            <br className="lg:block hidden" />
                                            yang anda butuhkan
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full self-center lg:pt-0 pt-10 px-4 lg:w-1/2 mt-20 lg:mt-0">
                        <img
                            src="/img/info.png"
                            alt="Info"
                            className="w-[525px] lg:h-[533px] mx-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
