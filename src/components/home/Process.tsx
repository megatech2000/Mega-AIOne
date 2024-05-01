import Image from "next/image";
import { TbPlayerPlay } from "react-icons/tb";

const Process = () => {
  return (
    <div>
      <section className="bg-process relative">
        <div>
          <div className="bg-gradient-to-r from-[#000] to-transparent  absolute  w-full h-full"></div>
          <div className="bg-gradient-to-b from-[#000] to-transparent  absolute  w-full h-[200px]"></div>
          <div className="flex flex-col items-center justify-center h-full pt-20 ">
            <div className="text-center px-5 lg:w-[60%] z-[1000]">
              <h1 data-aos="fade-up" data-aos-duration="1100">
                Take a Quick Tour: See How the Process Works
              </h1>
              <p className="mb-10" data-aos="fade-up" data-aos-duration="1100">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
            <div
              className="z-[1000]"
              data-aos="fade-up"
              data-aos-duration="1100"
            >
              <button className="text-white px-10 py-3 bg-[#324393] border border-[#324393] rounded-lg scroll-menu">
                Sign Up
              </button>
            </div>
            <div className="py-20 mb-20 rounded-2xl px-5 md:px-20 z-[1000] relative">
              <Image
                className=" rounded-2xl"
                src="/images/hero-img.jpg"
                alt=""
                width={2000}
                height={2000}
              />
            </div>
            <div className="text-black text-2xl md:text-4xl  p-3 rounded-full bg-[#fff] absolute top-[64%] lg:top-[60%] z-[1000]  cursor-pointer">
              <TbPlayerPlay />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
