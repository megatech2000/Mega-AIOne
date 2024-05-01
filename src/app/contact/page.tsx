import Link from "next/link";

const contactPage = () => {
  return (
    <section>
      <div>
        <div className="absolute w-full bg-gradient-to-r from-[#1920C9] to-[#117DFA] h-screen z-[100000]">
          <div className="h-full">
            <div className="max-w-screen-xl mx-auto flex flex-col h-full items-center md:px-4">
              <div
                className="text-center max-w-xs
                 md:max-w-screen-sm lg:max-w-screen-lg my-auto mx-auto"
              >
                <h1 className="mb-4 text-6xl font-extrabold text-white">
                  Under Maintance!!
                </h1>
                <p className="text-xl text-white mb-6">
                  Sorry, the page you are looking for could not be found.
                </p>
                <Link
                  className="mt-8 px-10 py-2.5 bg-white rounded-full relative z-10 cursor-pointer"
                  href="/"
                >
                  Return Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default contactPage;
