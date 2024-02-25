import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const [isToTopVisible, setToTopVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // const toTopButton = document.querySelector('#to-top');
      const scrollY = window.scrollY;

      // Tampilkan tombol ketika scroll ke bawah, sembunyikan ketika di atas
      if (scrollY > 0 && !isToTopVisible) {
        setToTopVisible(true);
      } else if (scrollY === 0 && isToTopVisible) {
        setToTopVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isToTopVisible]);

  const handleToTopClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col md:flex-row  items-center justify-center w-full px-8 md:px-20 py-5 bg-dark relative ">
      <h2 className="text-white text-sm sm:text-lg">
        &copy; Copyright Ghusan H.N. - 2024 All Rights Reserved
      </h2>
      <FontAwesomeIcon
        icon="fa-solid fa-circle-up"
        className={`fixed ${isToTopVisible ? 'flex' : 'hidden'} justify-center items-center bottom-4 right-4 z-[9999] h-12 w-12  rounded-full bg-white hover:animate-pulse text-main hover:cursor-pointer`}
        onClick={handleToTopClick}
      />
    </div>
  );
};

export default Footer;
