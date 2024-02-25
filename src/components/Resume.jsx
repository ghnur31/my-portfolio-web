const Resume = () => {
  return (
    <div
      id="resume"
      className="col flex flex-col bg-slate-200 justify-center items-center px-8 md:px-20 py-24 dark:bg-txdark"
    >
      <h2 className="text-5xl text-center font-bold mb-16">Resume</h2>

      <div className="flex flex-col lg:flex-row w-full ">
        <div className="col lg:col-1/2 w-full md:mr-10">
          <h3 className="mb-10 text-center text-3xl font-bold">Education</h3>

          <div className="relative flex gap-2 pb-8 items-baseline ">
            <div className="before:absolute before:left-[7px] before:h-full before:w-[2px] before:bg-main ">
              <div className="w-4 h-4 rounded-full -left-4 top-2 bg-main border-2 border-main "></div>
            </div>
            <div className="flex flex-col gap-y-2 shadow-lg bg-white dark:shadow-md dark:bg-txdark dark:shadow-white p-3">
              <h4 className="text-xl font-bold  relative">
                Universitas Gunadarma
              </h4>
              <p className="">2019 - 2023</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
                alias deserunt laboriosam quo ducimus cum, magnam eos officia
                mollitia voluptas!
              </p>
            </div>
          </div>
          <div className="relative flex gap-2 pb-6 items-baseline">
            <div className="before:absolute before:left-[5.5px] before:h-full before:w-[2px] before:bg-main">
              <div className="w-4 h-4 rounded-full -left-4 top-2 bg-main border-2 border-main "></div>
            </div>
            <div className="flex flex-col gap-y-2 shadow-xl bg-white dark:shadow-md dark:bg-txdark dark:shadow-white p-3">
              <h4 className="text-xl font-bold relative">
                SMA Negeri 1 Cilimus
              </h4>
              <p className="">2016 - 2019</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                vero quae dignissimos nihil unde totam nisi ipsam cupiditate ea
                aperiam.
              </p>
            </div>
          </div>
        </div>

        <div className="col mt-10 lg:mt-0 lg:col-1/2 w-full">
          <h3 className="mb-10 text-center text-3xl font-bold">Experience</h3>

          <div className="relative flex gap-2 pb-8 items-baseline ">
            <div className="before:absolute before:left-[7px] before:h-full before:w-[2px] before:bg-main ">
              <div className="w-4 h-4 rounded-full -left-4 top-2 bg-main border-2 border-main "></div>
            </div>
            <div className="flex flex-col gap-y-2 shadow-lg bg-white dark:shadow-md dark:bg-txdark dark:shadow-white p-3">
              <h4 className="text-xl font-bold  relative">
                Fullstack Developer at BTPN Syariah
              </h4>
              <p className="">2019 - 2023</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
                alias deserunt laboriosam quo ducimus cum, magnam eos officia
                mollitia voluptas!
              </p>
            </div>
          </div>
          <div className="relative flex gap-2 pb-8 items-baseline ">
            <div className="before:absolute before:left-[7px] before:h-full before:w-[2px] before:bg-main ">
              <div className="w-4 h-4 rounded-full -left-4 top-2 bg-main border-2 border-main "></div>
            </div>
            <div className="flex flex-col gap-y-2 shadow-lg bg-white dark:shadow-md dark:bg-txdark dark:shadow-white p-3">
              <h4 className="text-xl font-bold  relative">
                Frontend Developer at Core Initiative
              </h4>
              <p className="">2019 - 2023</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
                alias deserunt laboriosam quo ducimus cum, magnam eos officia
                mollitia voluptas!
              </p>
            </div>
          </div>
          <div className="relative flex gap-2 pb-8 items-baseline ">
            <div className="before:absolute before:left-[7px] before:h-full before:w-[2px] before:bg-main ">
              <div className="w-4 h-4 rounded-full -left-4 top-2 bg-main border-2 border-main "></div>
            </div>
            <div className="flex flex-col gap-y-2 shadow-lg bg-white dark:shadow-md dark:bg-txdark dark:shadow-white p-3">
              <h4 className="text-xl font-bold  relative">
                Fullstack Developer at Qwords Indonesia
              </h4>
              <p className="">2019 - 2023</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
                alias deserunt laboriosam quo ducimus cum, magnam eos officia
                mollitia voluptas!
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Resume;
