const Resume = () => {
  return (
    <div
      id="resume"
      className="col flex flex-col bg-slate-200 justify-center items-center px-8 md:px-20 py-24 dark:bg-txdark"
    >
      <h2 className="text-5xl text-center font-bold mb-16 text-main">Resume</h2>

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
              <p className="">S1 Informatika | IPK :3.70 | Depok, 2019-2023</p>
              <ul className="list-disc ml-5 text-slate-500 dark:text-slate-400">
                <li>
                  Mengikuti pelatihan membangun Website menggunakan HTML, CSS,
                  Javascript.
                </li>
                <li>
                  Mengikuti pelatihan proyek SQL Server di Lembaga Pengembangan
                  Komputer Gunadarma
                </li>
                <li>
                  Membuat Website informasi tentang penanganan pertama pada
                  penyakit untuk tugas projek pemrograman web.
                </li>
              </ul>
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
              <p className="">IPA-Biologi | Kuningan, 2016-2019</p>
              <ul className="list-disc ml-5 text-slate-500 dark:text-slate-400">
                <li>
                  Mengikuti ekstrakulikuler HAMMAS (Himpunan Aktivis Muda Masjid
                  Sekolah)
                </li>
                <li>Menjadi bagian Core Team IT di sekolah</li>
              </ul>
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
                Fullstack Developer at BTPN Syariah x Rakamin Academy
              </h4>
              <p className="">Magang Virtual | Jan 2024 - Feb 2024</p>
              <p className="text-slate-500 dark:text-slate-400">
                Membuat dan menguji API untuk proses autentikasi login dan
                register user, serta mengonfigurasi gambar yang di upload pada
                user di sisi server.
              </p>
            </div>
          </div>
          <div className="relative flex gap-2 pb-8 items-baseline ">
            <div className="before:absolute before:left-[7px] before:h-full before:w-[2px] before:bg-main ">
              <div className="w-4 h-4 rounded-full -left-4 top-2 bg-main border-2 border-main "></div>
            </div>
            <div className="flex flex-col gap-y-2 shadow-lg bg-white dark:shadow-md dark:bg-txdark dark:shadow-white p-3">
              <h4 className="text-xl font-bold  relative">
                Frontend Developer at Core Initiative x Rakamin Academy
              </h4>
              <p className="">Magang Virtual | Des 2023 - Jan 2024</p>
              <p className="text-slate-500 dark:text-slate-400">
                Membuat halaman katalog item untuk produk pakaian pria dan
                wanita yang terintegrasi dari data API web server.
              </p>
            </div>
          </div>
          <div className="relative flex gap-2 pb-8 items-baseline ">
            <div className="before:absolute before:left-[7px] before:h-full before:w-[2px] before:bg-main ">
              <div className="w-4 h-4 rounded-full -left-4 top-2 bg-main border-2 border-main "></div>
            </div>
            <div className="flex flex-col gap-y-2 shadow-lg bg-white dark:shadow-md dark:bg-txdark dark:shadow-white p-3">
              <h4 className="text-xl font-bold  relative">
                Fullstack Developer at Qwords Indonesia x Rakamin Academy
              </h4>
              <p className="">Magang Virtual | Nov 2023 - Des 2024</p>
              <p className="text-slate-500 dark:text-slate-400">
                Mendesain ulang homepage situs website Qwords: Cloud Web Hosing
                Indonesia menggunakan Laravel dan Bootstrap.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
