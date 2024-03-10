import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import Typed from "typed.js";
import resume from "../../public/pdf/cv_ghusan.pdf"

const Hero = () => {
  useEffect(() => {
    // Konfigurasi Typed.js
    const options = {
      strings: ["Frontend Developer"],
      typeSpeed: 60, // Kecepatan ketik (milidetik)
      backSpeed: 40, // Kecepatan menghapus (milidetik)
      loop: true, // Mengulang teks atau tidak
    };

    // Inisialisasi Typed.js
    const typed = new Typed("#typed-text", options);

    // Membersihkan Typed.js saat komponen di-unmount
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div
      id="hero"
      className="flex flex-col py-28 px-8 md:px-20 w-full lg:flex-row"
    >
      <div className="col flex flex-col justify-center items-start">
        <h3 className="text-3xl font-bold">Hello, It`s Me</h3>
        <h1 className="text-5xl font-bold">Ghusan Hidayat Nur</h1>
        <h3 className="text-3xl font-bold">
          And I`m a <span id="typed-text" className="text-main"></span>
        </h3>
        <p className="text-md mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam id
          placeat, iusto blanditiis numquam, voluptatum saepe, facilis
          voluptatem autem nisi culpa commodi?
        </p>
        <div className="mt-5 mb-2">
          <a className="icon-sosmed" href="">
            <FontAwesomeIcon icon="fa-brands fa-facebook" />
          </a>
          <a className="icon-sosmed" href="">
            <FontAwesomeIcon icon="fa-brands fa-instagram" />
          </a>
          <a className="icon-sosmed" href="">
            <FontAwesomeIcon icon="fa-brands fa-github" />
          </a>
          <a className="icon-sosmed" href="">
            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
          </a>
        </div>
        <div className="justify-start items-center">
          <a 
            className="my-button hover:scale-105 transition duration-300"
            href={resume}
            download
          >
            Download CV
          </a>
        </div>
      </div>

      <div className="col px-10 md:px-0 pt-12">
        <img src="img/ghusan.png" alt="mypic" />
      </div>
    </div>
  );
};

export default Hero;
