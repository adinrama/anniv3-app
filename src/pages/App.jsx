import Header from "../components/Header";

const App = () => {
  return (
    <div>
      {/* Start Header */}
      <Header />
      {/* End Header */}

      {/* Start Banner */}
      <section className="mt-3 bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Halo Ella Sayang!!
              <strong className="font-extrabold text-red-700 sm:block mb-5 mt-3">
                {" "}
                Semoga Kamu Menyukai Ini Semua.{" "}
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed italic">Bismillah..</p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                href="/hal2"
              >
                Click Me
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* End Banner */}
    </div>
  );
};

export default App;
