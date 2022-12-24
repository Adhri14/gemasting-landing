import CardService from "../molecules/CardService";

export default function ServiceSection() {
  return (
    <section id="service" className="pt-20">
      <div className="container">
        <div className="flex flex-wrap mb-[100px] ">
          <div className="w-full lg:w-1/2">
            <p className="text-base font-semibold text-primary">Layanan</p>
            <h2 className="text-[24px] lg:text-4xl text-black mt-1 font-semibold">
              Layanan <span className="text-primary">Gemasting</span>
            </h2>
          </div>
          <div className="w-full lg:w-1/2">
            <p className="text-sm lg:text-base text-gray-300 group-hover:text-gray-300 lg:mt-0 mt-[20px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque et
              quae optio veritatis non doloribus accusantium sit? Ipsam possimus
              ex tenetur aperiam illo dolorum hic reprehenderit officia,
              consequatur, quaerat aut eum assumenda accusantium nobis
              exercitationem error porro eaque optio consequuntur nostrum quod.
              Facere adipisci quos odit nostrum! Tenetur, doloribus cupiditate.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-10 border-gray-100 border-b pb-10 lg:pb-20">
          <CardService title="Chat Partner">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-[#ec4794] group-hover:fill-[#ffffff] mb-5"
            >
              <path
                d="M16.0265 2.66797C23.5998 2.66797 29.3332 8.87728 29.3332 15.9813C29.3332 24.2203 22.6132 29.3346 15.9998 29.3346C13.8132 29.3346 11.3865 28.7471 9.43984 27.5987C8.75984 27.1847 8.1865 26.8776 7.45317 27.118L4.75984 27.9192C4.07984 28.1328 3.4665 27.5987 3.6665 26.8776L4.55984 23.8865C4.7065 23.4725 4.67984 23.0318 4.4665 22.6847C3.31984 20.5748 2.6665 18.2647 2.6665 16.0213C2.6665 8.99746 8.27984 2.66797 16.0265 2.66797ZM22.1198 14.3255C21.1732 14.3255 20.4132 15.0866 20.4132 16.0347C20.4132 16.9694 21.1732 17.7439 22.1198 17.7439C23.0665 17.7439 23.8265 16.9694 23.8265 16.0347C23.8265 15.0866 23.0665 14.3255 22.1198 14.3255ZM15.9732 14.3255C15.0398 14.3121 14.2665 15.0866 14.2665 16.0213C14.2665 16.9694 15.0265 17.7306 15.9732 17.7439C16.9198 17.7439 17.6798 16.9694 17.6798 16.0347C17.6798 15.0866 16.9198 14.3255 15.9732 14.3255ZM9.8265 14.3255C8.87984 14.3255 8.11984 15.0866 8.11984 16.0347C8.11984 16.9694 8.89317 17.7439 9.8265 17.7439C10.7732 17.7306 11.5332 16.9694 11.5332 16.0347C11.5332 15.0866 10.7732 14.3255 9.8265 14.3255Z"
                // fill="text-primary"
              />
            </svg>
          </CardService>
          <CardService title="Buat Janji">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-[#ec4794] group-hover:fill-[#ffffff] mb-5"
            >
              <path d="M21.588 2.66797C25.7067 2.66797 28 5.0413 28 9.10797V22.8813C28 27.0146 25.7067 29.3346 21.588 29.3346H10.4133C6.36 29.3346 4 27.0146 4 22.8813V9.10797C4 5.0413 6.36 2.66797 10.4133 2.66797H21.588ZM10.7733 20.988C10.3733 20.948 9.98667 21.1346 9.77333 21.4813C9.56 21.8146 9.56 22.2546 9.77333 22.6013C9.98667 22.9346 10.3733 23.1346 10.7733 23.0813H21.2267C21.7587 23.028 22.16 22.5733 22.16 22.0413C22.16 21.4946 21.7587 21.0413 21.2267 20.988H10.7733ZM21.2267 14.9066H10.7733C10.1987 14.9066 9.73333 15.3746 9.73333 15.948C9.73333 16.5213 10.1987 16.988 10.7733 16.988H21.2267C21.8 16.988 22.2667 16.5213 22.2667 15.948C22.2667 15.3746 21.8 14.9066 21.2267 14.9066ZM14.7587 8.86797H10.7733V8.8813C10.1987 8.8813 9.73333 9.34797 9.73333 9.9213C9.73333 10.4946 10.1987 10.9613 10.7733 10.9613H14.7587C15.3333 10.9613 15.8 10.4946 15.8 9.90664C15.8 9.33464 15.3333 8.86797 14.7587 8.86797Z" />
            </svg>
          </CardService>
          <CardService title="KMS Online">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-[#ec4794] group-hover:fill-[#ffffff] mb-5"
            >
              <path d="M22.2257 2.66797C26.7603 2.66797 29.3203 5.23997 29.3337 9.77463V22.228C29.3337 26.7613 26.7603 29.3346 22.2257 29.3346H9.77366C5.23899 29.3346 2.66699 26.7613 2.66699 22.228V9.77463C2.66699 5.23997 5.23899 2.66797 9.77366 2.66797H22.2257ZM16.667 8.17464C16.2923 7.94797 15.839 7.94797 15.4803 8.17464C15.119 8.39997 14.9203 8.81464 14.959 9.22797V22.8146C15.027 23.388 15.5057 23.8146 16.0657 23.8146C16.6403 23.8146 17.119 23.388 17.1723 22.8146V9.22797C17.2257 8.81464 17.027 8.39997 16.667 8.17464ZM10.4403 12.548C10.0803 12.3213 9.62566 12.3213 9.26699 12.548C8.90566 12.7746 8.70699 13.1866 8.74699 13.6013V22.8146C8.79899 23.388 9.27899 23.8146 9.85233 23.8146C10.427 23.8146 10.9057 23.388 10.959 22.8146V13.6013C11.0003 13.1866 10.799 12.7746 10.4403 12.548ZM22.7857 17.388C22.427 17.1613 21.9737 17.1613 21.6003 17.388C21.239 17.6146 21.0403 18.0133 21.0937 18.4413V22.8146C21.147 23.388 21.6257 23.8146 22.2003 23.8146C22.7603 23.8146 23.239 23.388 23.307 22.8146V18.4413C23.3457 18.0133 23.147 17.6146 22.7857 17.388Z" />
            </svg>
          </CardService>
          <CardService title="Cek Stunting">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-[#ec4794] group-hover:fill-[#ffffff] mb-5"
            >
              <path d="M11.9413 6.61397C12.5948 6.49165 13.25 6.81794 13.5351 7.40769C13.6061 7.51471 13.6629 7.63015 13.7042 7.75124C13.8853 10.547 14.0785 13.2954 14.2596 16.0438C14.2555 16.3295 14.3004 16.6139 14.3924 16.8849C14.6091 17.4183 15.1483 17.7567 15.7327 17.726L24.6076 17.1574L24.668 17.1811L24.8299 17.1927C25.1508 17.2338 25.4499 17.3803 25.677 17.6107C25.9419 17.8795 26.0872 18.2406 26.0809 18.6145C25.731 23.7107 21.9947 27.9686 16.9102 29.0656C11.8257 30.1626 6.6134 27.8352 4.11688 23.3532C3.38279 22.0622 2.91891 20.6405 2.75244 19.1713C2.68788 18.736 2.65961 18.2962 2.66792 17.8563C2.68475 12.4374 6.54287 7.76006 11.9413 6.61397ZM17.2179 2.66907C23.3123 2.85151 28.4057 7.2757 29.3288 13.1888C29.3346 13.2241 29.3346 13.2601 29.3288 13.2954L29.3271 13.4624C29.3071 13.683 29.2165 13.8935 29.066 14.0624C28.8779 14.2736 28.6118 14.4026 28.3266 14.4208L18.0873 15.0961L17.9186 15.0995C17.6391 15.0858 17.3711 14.9771 17.1623 14.7892C16.9118 14.5637 16.7697 14.245 16.7711 13.9114L16.0829 3.85372V3.68787C16.0954 3.405 16.2221 3.13864 16.435 2.94752C16.6479 2.7564 16.9296 2.65622 17.2179 2.66907Z" />
            </svg>
          </CardService>
          <CardService title="Rekam Medis">
            <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-[#ec4794] group-hover:fill-[#ffffff] mb-5"
            >
              <path d="M12.5655 2.68772C13.8069 2.67461 14.9655 3.24795 15.7255 4.22128L16.8989 5.78128C17.2722 6.24795 17.8322 6.52795 18.4322 6.52795H22.5255C27.4455 6.52795 29.8455 9.15461 29.8322 14.5413V21.0346C29.8322 26.1813 26.6589 29.3546 21.4989 29.3546H11.4855C6.35219 29.3546 3.16553 26.1813 3.16553 21.0213V11.0079C3.16553 5.48795 5.61886 2.68772 10.4589 2.68772H12.5655ZM22.6722 18.4079H10.3255C9.76553 18.4079 9.32553 18.8479 9.32553 19.4079C9.32553 19.9546 9.76553 20.4079 10.3255 20.4079H22.6722C23.2189 20.4079 23.6589 19.9546 23.6589 19.4079C23.6589 18.8479 23.2189 18.4079 22.6722 18.4079Z" />
            </svg>
          </CardService>
          <CardService title="Komunitas">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-[#ec4794] group-hover:fill-[#ffffff] mb-5"
            >
              <path d="M16.7608 2.80072L25.6107 5.76999C26.6014 6.10078 27.2712 7.01078 27.2766 8.03061L27.3329 16.8848C27.3504 19.5691 26.3718 22.1722 24.5798 24.2119C23.7557 25.148 22.6993 25.9521 21.3502 26.6713L16.5931 29.2143C16.4441 29.2927 16.2803 29.3333 16.1152 29.3346C15.9501 29.3359 15.785 29.2967 15.6373 29.2195L10.8359 26.7353C9.47207 26.028 8.40627 25.2356 7.57403 24.3126C5.7525 22.2938 4.7404 19.7024 4.72295 17.0143L4.66654 8.16659C4.6612 7.14545 5.31894 6.22891 6.3042 5.88505L15.1205 2.80987C15.644 2.62421 16.2279 2.62029 16.7608 2.80072ZM20.9929 12.2928C20.5969 11.9124 19.9593 11.915 19.5687 12.3007L15.0773 16.7278L13.2383 14.9601C12.8424 14.5796 12.2061 14.5835 11.8141 14.9692C11.4235 15.3549 11.4276 15.9747 11.8235 16.3552L14.378 18.8132C14.5766 19.0041 14.8344 19.0982 15.0921 19.0957C15.3498 19.0943 15.6062 18.9976 15.8022 18.8041L21.001 13.6788C21.3916 13.2931 21.3875 12.6733 20.9929 12.2928Z" />
            </svg>
          </CardService>
        </div>
      </div>
    </section>
  );
}
