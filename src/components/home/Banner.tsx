import Image from "next/image";

const Banner = () => {
  return (
    <section className="bg-banner relative" id="home">
      <div className="bg-overlay absolute w-full bottom-0 h-full"></div>
      <div className="section-width">
        <div className="flex flex-col items-center justify-center h-full pt-36 md:pt-56 ">
          <div className="text-center px-5 z-50">
            <h1>
              Welcome to AI One: Your <br />
              <span className="bg-gradient-to-r from-blue-500 to-[#d610bc] text-transparent bg-clip-text">
                {" "}
                Intelligent Chatbot Companion
              </span>
            </h1>
            <p className="text-[#c2c0c0] mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
          <div className="flex gap-5 z-50">
            <button className="bg-[#fff]  px-10 py-2 text-[#3434be]  rounded-lg scroll-menu">
              Get Started
            </button>
            <button className="text-white px-10 py-2 border rounded-lg border-[#fff] scroll-menu">
              Learn More
            </button>
          </div>
          <div className="py-20 lg:py-36 lg:mb-20 rounded-2xl z-10">
            <Image
              className=" rounded-2xl z-[1000]"
              src="/images/hero-img.jpg"
              alt=""
              width={2000}
              height={2000}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
