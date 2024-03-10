import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Service = () => {
  return (
    <div id="service" className=" px-8 md:px-20 py-28  dark:bg-txdark">
      <h2 className="mb-20 text-5xl text-center font-bold"><span className="text-main">Service</span></h2>

      <div className="flex flex-col lg:flex-row justify-center gap-10">
        <div className="w-full md:flex-wrap lg:w-1/3 card-component"> 
          <FontAwesomeIcon icon="fa-solid fa-code" className="text-6xl" />
          <h3 className="text-2xl mt-3">Web Development</h3>
          <p className="text-sm my-3 mx-3 text-center">
            Pembuatan dan pengembangan resposif desain web, menggunakan HTML, CSS (Bootstrap/Tailwind), Javascript (React/ Vue / Express), MySQL/ MongoDB
          </p>
          <a href="#" className="my-button">
            Read More
          </a>
        </div>

        <div className="w-full md:flex-wrap lg:w-1/3 card-component">
          <FontAwesomeIcon icon="fa-solid fa-paintbrush" className="text-6xl"/>
          <h3 className="text-2xl mt-3">UI/UX Desgin</h3>
          <p className="text-sm my-3 mx-3 text-center">
            Perancangan kebutuhan user bagian UX, dan mendesain tampilan aplikasi yang menarik berbasis web/ mobile menggunakan Figma
          </p>
          <a href="#" className="my-button">
            Read More
          </a>
        </div>

        <div className="w-full md:flex-wrap lg:w-1/3 card-component">
          <FontAwesomeIcon icon="fa-solid fa-chart-pie" className="text-6xl"/>
          <h3 className="text-2xl mt-3">Microsoft Office</h3>
          <p className="text-sm my-3 mx-3 text-center">
            Membuat dokumen Microsoft Office (Word, Excel, Powerpoint), pengeloaan data, membuat laporan, dan lain-lain  
          </p>
          <a href="#" className="my-button">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Service;
