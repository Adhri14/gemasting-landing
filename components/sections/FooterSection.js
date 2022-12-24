export default function FooterSection() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container">
        <div className="flex justify-between flex-wrap flex-col md:items-center lg:items-start md:flex-row md:flex-nowrap">
          <div className="md:w-4/12 flex-shrink-0 text-left">
            <a href="/" className="mb-5 block">
              <img src="/img/Logo.png" alt="Logo" width={130} height={28} />
            </a>
            <p className="text-sm text-gray-300 mb-10">
              PT Menggapai Indonesia Cerdas
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 text-left">
            <div className="w-full md:px-4">
              <h2 className="font-medium tracking-widest text-lg mb-5 text-primary">
                Website
              </h2>
              <nav className="list-none mb-10 flex flex-col gap-y-2">
                <li>
                  <a href="#home" className="text-gray-300">
                    Beranda
                  </a>
                </li>
                <li>
                  <a href="#service" className="text-gray-300">
                    Layanan
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-300">
                    KMS Online
                  </a>
                </li>
              </nav>
            </div>
            <div className="w-full md:px-4">
              <h2 className="font-medium tracking-widest text-lg mb-5 text-primary">
                Company
              </h2>
              <nav className="list-none mb-10 flex flex-col gap-y-2">
                <li>
                  <a href="#about" className="text-gray-300">
                    Tentang
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-300">
                    Kontak
                  </a>
                </li>
              </nav>
            </div>
            <div className="w-full md:px-4">
              <h2 className="font-medium tracking-widest text-lg mb-5 text-primary">
                Support
              </h2>
              <nav className="list-none mb-10 flex flex-col gap-y-2">
                <li>
                  <a href="#home" className="text-gray-300">
                    Ketentuan Layanan
                  </a>
                </li>
                <li>
                  <a href="#service" className="text-gray-300">
                    Kebijakan Privasi
                  </a>
                </li>
              </nav>
            </div>
            <div className="w-full md:px-4">
              <h2 className="font-medium tracking-widest text-lg mb-5 text-primary">
                Follow us
              </h2>
              <nav className="list-none mb-10 flex flex-col gap-y-2">
                <li>
                  <a href="https://instagram.com" className="text-gray-300">
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/gemasting/"
                    className="text-gray-300"
                  >
                    LinkedIn
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>

        <div className="py-12">
          <p className="text-[#999999] text-center text-sm">
            © 2020 PT Menggapai Indoensia Cerdas. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
