import Image from "next/image";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="bg-banner " id="home">
      <div className="section-width">
        <div className="flex flex-col items-center justify-center h-full pt-36 md:pt-56">
          <div className="text-center px-5">
            <h1>
              Welcome to AI One: Your <br />
              Intelligent Chatbot Companion
            </h1>
            <p className="text-[#8c8a8a] mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
          <div className="flex gap-5">
            <button className="text-white  px-10 py-2 bg-[#3434be] border border-[#434242] rounded-lg scroll-menu">
              Get Started
            </button>
            <button className="text-white px-10 py-2 border rounded-lg border-[#686767] scroll-menu">
              Learn More
            </button>
          </div>
          <div className="py-36 mb-20 rounded-2xl px-5 md:px-20">
            <Image
              className=" rounded-2xl"
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
