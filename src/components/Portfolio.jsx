import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Portfolio = () => {
  return (
    <div
      id="portfolio"
      className="col flex flex-col bg-slate-200 justify-center items-center px-8 md:px-20 py-24 dark:bg-txdark "
    >
      <h2 className="text-5xl text-center font-bold mb-20">
        Latest <span className="text-main">Project</span>
      </h2>

      <div className="grid grid-col-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white dark:bg-dark shadow-xl rounded-xl dark:shadow-md dark:shadow-white overflow-hidden hover:cursor-pointer hover:scale-105 transition duration-300">
          <img src="img/projek1.webp" alt="" className="object-cover " />

          <div className="p-4">
            <h4 className="text-2xl font-bold mb-2">Rest Countries API</h4>
            <p>
              The website application is about a rest API showcasing all the
              short profiles of countries worldwide.
            </p>
            <a href="https://rest-countries-api-ghn.vercel.app/" target="_blank" rel="noopener noreferrer">
              <button className="my-button mb-3">
                Demo <FontAwesomeIcon icon="fa-solid fa-link" />
              </button>
            </a>
          </div>
        </div>

        <div className="bg-white dark:bg-dark shadow-xl rounded-xl dark:shadow-md dark:shadow-white overflow-hidden hover:cursor-pointer hover:scale-105 transition duration-300">
          <img src="img/projek1.png" alt="" className="object-fit" />

          <div className="p-4">
            <h4 className="text-2xl font-bold mb-2">Rest Countries API</h4>
            <p>
              The website application is about a rest API showcasing all the
              short profiles of countries worldwide.
            </p>
            <button className="my-button mb-3">
              Demo <FontAwesomeIcon icon="fa-solid fa-link" />
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-dark shadow-xl rounded-xl dark:shadow-md dark:shadow-white overflow-hidden hover:cursor-pointer hover:scale-105 transition duration-300">
          <img src="img/projek1.png" alt="" className="object-cover" />

          <div className="p-4">
            <h4 className="text-2xl font-bold mb-2">Web Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae quam accusamus accusantium.
            </p>
            <button className="my-button mb-3">
              Demo <FontAwesomeIcon icon="fa-solid fa-link" />
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-dark shadow-xl rounded-xl dark:shadow-md dark:shadow-white overflow-hidden hover:cursor-pointer hover:scale-105 transition duration-300">
          <img src="img/projek1.png" alt="" className="object-cover" />

          <div className="p-4">
            <h4 className="text-2xl font-bold mb-2">Web Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae quam accusamus accusantium.
            </p>
            <button className="my-button mb-3">
              Demo <FontAwesomeIcon icon="fa-solid fa-link" />
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-dark shadow-xl rounded-xl dark:shadow-md dark:shadow-white overflow-hidden hover:cursor-pointer hover:scale-105 transition duration-300">
          <img src="img/projek1.png" alt="" className="object-cover" />

          <div className="p-4">
            <h4 className="text-2xl font-bold mb-2">Web Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae quam accusamus accusantium.
            </p>
            <button className="my-button mb-3">
              Demo <FontAwesomeIcon icon="fa-solid fa-link" />
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-dark shadow-xl rounded-xl dark:shadow-md dark:shadow-white overflow-hidden hover:cursor-pointer hover:scale-105 transition duration-300">
          <img src="img/projek1.png" alt="" className="object-cover" />

          <div className="p-4">
            <h4 className="text-2xl font-bold mb-2">Web Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae quam accusamus accusantium.
            </p>
            <button className="my-button mb-3">
              Demo <FontAwesomeIcon icon="fa-solid fa-link" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
