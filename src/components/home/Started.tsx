import Image from "next/image";
import { startedData } from "./data";

const Started = () => {
  return (
    <>
      <section className=" bg-[#000]  padding-top">
        <div className="section-width">
          <div className="text-center">
            <h2 className="text-4xl text-white md:text-5xl font-medium leading-tight">
              Get Started{" "}
              <span className="bg-gradient-to-r from-blue-500 to-[#520147] text-transparent bg-clip-text">
                {" "}
                in Just a Few clicks
              </span>
            </h2>
          </div>
          {startedData.map((item, i) => (
            <div className="md:flex pt-20 mb-10  md:mb-36" key={i}>
              <div className="basis-[100%] flex items-center justify-center md:pr-10">
                <div className="pb-10">
                  <h2 className="text-white text-4xl py-5">
                    {item.title}
                    <span className="bg-gradient-to-r from-blue-500 to-[#520147] text-transparent bg-clip-text">
                      {" "}
                      {item.span}
                    </span>
                  </h2>
                  <p className=" text-sm text-[#aeadad]">{item.desc}</p>
                </div>
              </div>
              <div className="basis-[100%]  rounded-lg border border-[#1e1e1e] ">
                <div className="p-2">
                  <Image
                    className="rounded-lg"
                    src={item.img}
                    alt=""
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Started;
