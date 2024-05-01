import Image from "next/image";

const AllinOne = () => {
  return (
    <section className="padding-top bg-[#000]">
      <div className="section-width">
        <div
          className="text-center"
          data-aos="fade-up"
          data-aos-duration="1100"
        >
          <h2>
            All in One{" "}
            <span className="bg-gradient-to-r from-blue-500 to-[#520147] text-transparent bg-clip-text">
              {" "}
              Solutions
            </span>
          </h2>
          <p className=" pt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-20">
          <div
            className=" bg-gradient-to-t from-[#05050c] to-[#02020a] p-10 rounded-xl border border-[#212121]"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            <div className="w-full h-auto ">
              <Image
                className="w-full h-full"
                src="/images/solution-img.png"
                alt=""
                width={1000}
                height={1000}
              />
            </div>
            <h3>Integration</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
          <div
            className=" bg-gradient-to-t from-[#05050c] to-[#02020a] p-10 rounded-xl border border-[#212121]"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            <div className="w-full h-auto ">
              <Image
                className="w-full h-full"
                src="/images/solution-img.png"
                alt=""
                width={1000}
                height={1000}
              />
            </div>
            <h3>Features</h3>
            <p>
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
