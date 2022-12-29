import Navbar from "../components/molecules/Navbar";
import AboutSection from "../components/sections/AboutSection";
import DetailSection from "../components/sections/DetailSection";
import FooterSection from "../components/sections/FooterSection";
import HeroSection from "../components/sections/HeroSection";
import JumbotronSection from "../components/sections/JumbotronSection";
import ServiceSection from "../components/sections/ServiceSection";

export default function Home() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <ServiceSection />
            <DetailSection />
            <AboutSection />
            <JumbotronSection />
            <FooterSection />
            <div className="rounded-full px-3 py-3 bottom-10 right-10 fixed bg-white drop-shadow-xl cursor-pointer">
                <a
                    href="https://wa.me/6281292245171/?text=Saya ingin bertanya tentang gemasting"
                    className="block"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src="/img/wa.png" alt="WA" width={40} height={40} />
                </a>
            </div>
        </>
    );
}
