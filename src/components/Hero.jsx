import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import Typed from "typed.js";
import resume from "../assets/cv_ghusan.pdf";

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
          Seseorang yang antusias dalam pengembangan aplikasi berbasis web,
          menggunakan teknologi MEVN untuk pengembangan Fullstack web, senang
          mempelajari skill baru seperti desain UI/UX, desain grafis, dan Machine
          Learning.
        </p>
        <div className="mt-5 mb-2">
          <a
            className="icon-sosmed"
            href="https://www.facebook.com/GhusanHidayatNur/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon="fa-brands fa-facebook" />
          </a>
          <a
            className="icon-sosmed"
            href="https://www.instagram.com/ghnur_31/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon="fa-brands fa-instagram" />
          </a>
          <a
            className="icon-sosmed"
            href="https://github.com/ghnur31"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon="fa-brands fa-github" />
          </a>
          <a
            className="icon-sosmed"
            href="https://www.linkedin.com/in/ghusan-hidayat-nur/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
          </a>
        </div>
        <div className="justify-start items-center">
          <a
            className="my-button hover:scale-105 transition duration-300"
            href={resume}
            download="cv_ghusan.pdf"
          >
            Download CV
          </a>
        </div>
      </div>

      <div className="col px-10 md:px-0 pt-12">
        <img src="img/ghusan.png" alt="mypic" className="object-cover"/>
      </div>
    </div>
  );
};

export default Hero;
