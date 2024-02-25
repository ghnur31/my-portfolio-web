const Contact = () => {
  return (
    <div
      id="contact"
      className="col flex flex-col justify-center items-center px-8 md:px-20 py-24 dark:bg-txdark"
    >
      <h2 className="text-5xl text-center font-bold mb-16">Contact</h2>

      <div className="flex flex-col w-full lg:flex-row justify-center gap-10">
        <div className="w-full lg:w-1/2 items-start">
          <h3 className="text-3xl font-bold mb-10">Get In Touch</h3>
          <div className="text-slate-500 ">
            <p className="mb-2">Linggamekar Jl. Pemuda</p>
            <p className="mb-2">Kuningan, Jawa Barat</p>
            <p className="mb-2">0821 2494 6047</p>
            <p className="mb-2">ghusanbisnis77@gmail.com</p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 ">
          <form action="" className="flex flex-col">
            <div className="w-full flex flex-col lg:flex-row gap-x-2 gap-y-5 mb-5">
              <input type="text" required placeholder="Your Name" className="w-full lg:w-1/2 border focus:outline-none p-3 border-slate-400 focus:ring-1 focus:ring-main dark:text-txdark placeholder:text-slate-400" />
              <input type="email" required placeholder="Your Email" className="w-full lg:w-1/2 border focus:outline-none p-3 border-slate-400 focus:ring-1 focus:ring-main dark:text-txdark placeholder:text-slate-400" />
            </div>
            <input type="text" placeholder="Subject" className="border border-slate-400 mb-5 p-3 dark:text-txdark focus:outline-none focus:ring-1 focus:ring-main placeholder:text-slate-400"/>
            <textarea placeholder="Your Message" className="border border-slate-400 p-3 dark:text-txdark focus:outline-none focus:ring-1 focus:ring-main placeholder:text-slate-400" rows={8}></textarea>
            <button type="submit" className="my-button w-full">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
