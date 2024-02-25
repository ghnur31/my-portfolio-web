import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Service = () => {
  return (
    <div id="service" className=" px-8 md:px-20 py-28  dark:bg-txdark">
      <h2 className="mb-20 text-5xl text-center font-bold"><span className="text-main">Service</span></h2>

      <div className="flex flex-col lg:flex-row justify-center gap-10">
        <div className="col card-component"> 
          <FontAwesomeIcon icon="fa-solid fa-code" className="text-6xl" />
          <h3 className="text-2xl mt-3">Web Development</h3>
          <p className="text-sm my-3 mx-3 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, error
            mollitia, unde esse doloribus quisquam debitis odio laborum delectus
            possimus ab assumenda quasi
          </p>
          <a href="#" className="my-button">
            Read More
          </a>
        </div>
        <div className="card-component">
          <FontAwesomeIcon icon="fa-solid fa-paintbrush" className="text-6xl"/>
          <h3 className="text-2xl mt-3">Graphic Desgin</h3>
          <p className="text-sm my-3 mx-3 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, error
            mollitia, unde esse doloribus quisquam debitis odio laborum delectus
            possimus ab assumenda quasi
          </p>
          <a href="#" className="my-button">
            Read More
          </a>
        </div>
        <div className="card-component">
          <FontAwesomeIcon icon="fa-solid fa-chart-pie" className="text-6xl"/>
          <h3 className="text-2xl mt-3">Analytis Sentiment</h3>
          <p className="text-sm my-3 mx-3 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, error
            mollitia, unde esse doloribus quisquam debitis odio laborum delectus
            possimus ab assumenda quasi
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
