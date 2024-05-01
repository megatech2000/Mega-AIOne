import Image from "next/image";

const AllinOne = () => {
  return (
    <section className="padding-top bg-[#000]">
      <div className="section-width">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-medium leading-snug text-white">
            All in One{" "}
            <span className="bg-gradient-to-r from-blue-500 to-[#520147] text-transparent bg-clip-text">
              {" "}
              Solutions
            </span>
          </h1>
          <p className="text-white pt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-20">
          <div className=" bg-gradient-to-t from-[#05050c] to-[#02020a] p-10 rounded-xl border border-[#212121]">
            <div className="w-full h-auto ">
              <Image
                className="w-full h-full"
                src="/images/solution-img.png"
                alt=""
                width={1000}
                height={1000}
              />
            </div>
            <h2 className="text-4xl py-5 text-white">Integration</h2>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
          <div className=" bg-gradient-to-t from-[#05050c] to-[#02020a] p-10 rounded-xl border border-[#212121]">
            <div className="w-full h-auto ">
              <Image
                className="w-full h-full"
                src="/images/solution-img.png"
                alt=""
                width={1000}
                height={1000}
              />
            </div>
            <h2 className="text-4xl py-5 text-white">Features</h2>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllinOne;
