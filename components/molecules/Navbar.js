import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", function (e) {
            if (this.scrollY > 30) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        });
    }, []);

    return (
        <>
            <header
                className={`bg-white ${
                    sticky ? "navbar-fixed" : ""
                } absolute top-0 left-0 flex items-center w-full z-10`}
            >
                <div className="container">
                    <div className="flex items-center justify-between relative py-4">
                        <Link href="/">
                            <Image
                                src="/img/Logo.png"
                                alt="Logo"
                                width={130}
                                height={28}
                            />
                        </Link>
                        <div className="flex items-center px-4">
                            <button
                                name="hamburger"
                                id="hamburger"
                                className="absolute right-4 z-50 transition duration-300 ease lg:hidden"
                                onClick={() => setOpenMenu(!openMenu)}
                            >
                                <Image
                                    width={24}
                                    height={24}
                                    src="/icon/menu.svg"
                                    alt="Menu"
                                />
                            </button>
                        </div>
                        <nav
                            id="nav-menu"
                            className={`hidden lg:flex w-1/2 py-4 lg:py-4 bg-white lg:bg-transparent`}
                        >
                            <ul className="block lg:flex lg:justify-between lg:w-full">
                                <li className="lg:text-center pb-3 pt-36 lg:py-0 w-full">
                                    <a
                                        className="text-base font-regular hover:font-semibold text-primary transition duration-300 ease-in-out"
                                        href="#home"
                                    >
                                        Beranda
                                    </a>
                                </li>
                                <li className="lg:text-center py-3 lg:py-0 w-full">
                                    <a
                                        className="text-base font-regular hover:font-semibold text-primary transition duration-300 ease-in-out"
                                        href="#service"
                                    >
                                        Layanan
                                    </a>
                                </li>
                                <li className="lg:text-center py-3 lg:py-0 w-full">
                                    <a
                                        className="text-base font-regular hover:font-semibold text-primary transition duration-300 ease-in-out"
                                        href="#!"
                                    >
                                        KMSOnline
                                    </a>
                                </li>
                                <li className="lg:text-center py-3 lg:py-0 w-full">
                                    <a
                                        className="text-base font-regular hover:font-semibold text-primary transition duration-300 ease-in-out"
                                        href="#about"
                                    >
                                        Tentang
                                    </a>
                                </li>
                                <li className="lg:text-center py-3 lg:py-0 w-full">
                                    <a
                                        className="text-base font-regular hover:font-semibold text-primary transition duration-300 ease-in-out"
                                        href="#contact"
                                    >
                                        Kontak
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            <button
                onClick={() => setOpenMenu(false)}
                className={`side-bar-blur ${
                    !openMenu ? "" : "side-bar-active"
                }`}
            >
                <nav className="side-bar">
                    <button
                        onClick={() => setOpenMenu(!openMenu)}
                        className="absolute top-[36px] left-[24px]"
                    >
                        <Image
                            src="/icon/close.svg"
                            alt="Close"
                            width={24}
                            height={24}
                        />
                    </button>
                    <ul className="block lg:flex lg:justify-between lg:w-full">
                        <li className="text-right pb-3 pt-36 lg:py-0 w-full">
                            <a
                                className="text-base font-semibold text-primary transition duration-300 ease-in-out hover:text-primary"
                                href="#home"
                            >
                                Beranda
                            </a>
                        </li>
                        <li className="text-right py-3 lg:py-0 w-full">
                            <a
                                className="text-base font-regular text-primary transition duration-300 ease-in-out hover:text-primary"
                                href="#service"
                            >
                                Layanan
                            </a>
                        </li>
                        <li className="text-right py-3 lg:py-0 w-full">
                            <a
                                className="text-base font-regular text-primary transition duration-300 ease-in-out hover:text-primary"
                                href="#!"
                            >
                                KMSOnline
                            </a>
                        </li>
                        <li className="text-right py-3 lg:py-0 w-full">
                            <a
                                className="text-base font-regular text-primary transition duration-300 ease-in-out hover:text-primary"
                                href="#about"
                            >
                                Tentang
                            </a>
                        </li>
                        <li className="text-right py-3 lg:py-0 w-full">
                            <a
                                className="text-base font-regular text-primary transition duration-300 ease-in-out hover:text-primary"
                                href="#contact"
                            >
                                Kontak
                            </a>
                        </li>
                    </ul>
                    <Image
                        src="/img/Logo.png"
                        alt="Logo"
                        width={168}
                        height={42}
                        className="ml-auto mt-10"
                    />
                    <h4 className="text-black text-right mt-[60px]">
                        Download Aplikasi Kami
                    </h4>
                    <a
                        href="https://play.google.com/store/apps/details?id=com.gemasting.app"
                        className="mt-1 block w-[170px] ml-auto"
                    >
                        <Image
                            src="/img/Badge.png"
                            alt="Button"
                            width={170}
                            height={50}
                        />
                    </a>
                </nav>
            </button>
        </>
    );
}
