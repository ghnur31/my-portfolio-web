import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import DarkMode from "./DarkMode/DarkMode";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "#" },
    { name: "Resume", link: "#resume" },
    { name: "Service", link: "#service" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Contact", link: "#contact" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div id="hero" className="shadow-md w-full fixed top-0 left-0 z-50">
      <div className="md:flex items-center justify-between bg-white shadow-md dark:bg-dark py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center"
        >
          PORTFOLIO
        </div>

        

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden"
        >
          <FontAwesomeIcon
            icon={open ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
          />
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-6 absolute md:static bg-slate-300 md:bg-white dark:bg-dark  left-0 w-full md:w-auto md:pl-0 pl-9 border-b-2 md:border-none ${
            open ? "top-16" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:mr-10 text-lg md:my-0 my-7">
              <a href={link.link} className=" hover:text-main">
                {link.name}
              </a>
            </li>
          ))}
          <DarkMode />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
