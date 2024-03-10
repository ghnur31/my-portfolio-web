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
          <div className="container-card-img">
            <img
              src="img/rest-countries.png"
              alt=""
              className="object-cover card-img"
            />
          </div>

          <div className="p-4">
            <h4 className="text-2xl font-bold mb-2">Rest Countries API</h4>
            <p>
              Aplikasi website tentang profil singkat seluruh negara di dunia
              dengan menggunakan data REST API. (challenge from Frontend Mentor) 
            </p>
            <a
              href="https://rest-countries-api-ghn.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="my-button mb-3">
                Demo <FontAwesomeIcon icon="fa-solid fa-link" />
              </button>
            </a>
          </div>
        </div>

        <div className="bg-white dark:bg-dark shadow-xl rounded-xl dark:shadow-md dark:shadow-white overflow-hidden hover:cursor-pointer hover:scale-105 transition duration-300">
          <div className="container-card-img">
            <img
              src="img/book-store.png"
              alt=""
              className="object-fit card-img"
            />
          </div>

          <div className="p-4">
            <h4 className="text-2xl font-bold mb-2">Books Store</h4>
            <p>
              Peracangan aplikasi web untuk toko buku online, autentikasi user, dan halaman dashboard admin. (latihan untuk belajar)
            </p>
            <a
              href="https://mern-book-inventory-client.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="my-button mb-3">
                Demo <FontAwesomeIcon icon="fa-solid fa-link" />
              </button>
            </a>
          </div>
        </div>

        <div className="bg-white dark:bg-dark shadow-xl rounded-xl dark:shadow-md dark:shadow-white overflow-hidden hover:cursor-pointer hover:scale-105 transition duration-300">
          <div className="container-card-img">
            <img
              src="img/ecommerce-catalog.PNG"
              alt=""
              className="object-fit card-img"
            />
          </div>

          <div className="p-4">
            <h4 className="text-2xl font-bold mb-2">Ecommerce-Catalog</h4>
            <p>
              Pembuatan halaman sederhana untuk katalog item produk pakaian pria
              dan wanita dari data Web Server. (Tugas di Core Initiative)
            </p>
            <a
              href="https://ecommerce-catalog-xi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="my-button mb-3">
                Demo <FontAwesomeIcon icon="fa-solid fa-link" />
              </button>
            </a>
          </div>
        </div>

        <div className="bg-white dark:bg-dark shadow-xl rounded-xl dark:shadow-md dark:shadow-white overflow-hidden hover:cursor-pointer hover:scale-105 transition duration-300">
          <div className="container-card-img">
            <img
              src="img/Bookshelf-app.png"
              alt=""
              className="object-fit card-img"
            />
          </div>

          <div className="p-4">
            <h4 className="text-2xl font-bold mb-2">Bookshelf App</h4>
            <p>
              Aplikasi CRUD sederhana untuk list buku-buku yang akan dibaca.
              (submission dicoding frontend basic)
            </p>
            <a
              href="https://ghnur31.github.io/Bookshelf-Apps/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="my-button mb-3">
                Demo <FontAwesomeIcon icon="fa-solid fa-link" />
              </button>
            </a>
          </div>
        </div>

        <div className="bg-white dark:bg-dark shadow-xl rounded-xl dark:shadow-md dark:shadow-white overflow-hidden hover:cursor-pointer hover:scale-105 transition duration-300">
          <div className="container-card-img">
            <img
              src="img/ghus-sport.png"
              alt=""
              className="object-fit card-img"
            />
          </div>

          <div className="p-4">
            <h4 className="text-2xl font-bold mb-2">GhusSport</h4>
            <p>
              perancangan aplikasi ecommerce untuk jersey club sepak bola
              favorit beserta payment gateway. (latihan untuk belajar)
            </p>
            <a
              href="https://dev-ghustech.pantheonsite.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="my-button mb-3">
                Demo <FontAwesomeIcon icon="fa-solid fa-link" />
              </button>
            </a>
          </div>
        </div>

        <div className="bg-white dark:bg-dark shadow-xl rounded-xl dark:shadow-md dark:shadow-white overflow-hidden hover:cursor-pointer hover:scale-105 transition duration-300">
          <div className="container-card-img">
            <img
              src="img/ghusfood-resto.png"
              alt=""
              className="object-fit card-img"
            />
          </div>

          <div className="p-4">
            <h4 className="text-2xl font-bold mb-2">Ghusfood Resto</h4>
            <p>
              Website landing page mengenai informasi sekilas restoran dan makanan minuman yang tersedia. (latihan untuk belajar)
            </p>
            <a
              href="https://ghnur31.github.io/landingPage-GhusfoodResto/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="my-button mb-3">
                Demo <FontAwesomeIcon icon="fa-solid fa-link" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
