import Header from "../components/Header";

const Halaman2 = () => {
  return (
    <div>
      {/* Start Header */}
      <Header />
      {/* End Header */}

      {/* Start Article */}
      <div className="p-5">
        <article className="group">
          <img
            alt=""
            src="https://storage.googleapis.com/bold-upgrade-421902.appspot.com/images/90714.jpg"
            className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
          />

          <div className="p-4">
            <a href="/hal3">
              <h3 className="text-lg font-medium text-gray-900">
                Senyumku, Ragaku, Hidupku, Semua Ada Disini
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              36 bulan mungkin terlihat seperti angka, namun bagiku itu mewakili
              kenangan seumur hidup yang dijalin bersama. Setiap tawa yang
              dibagikan, setiap air mata yang terhapus, setiap tatapan mata yang
              tercuri. Semuanya melukiskan gambaran indah tentang cinta yang
              telah kita bangun. Bubaa sayang, kamu adalah matahari yang
              menghangatkan hari-hariku dan bulan yang menuntunku melewati malam
              .....
            </p>
          </div>
        </article>
      </div>
      {/* End Article */}
    </div>
  );
};

export default Halaman2;
