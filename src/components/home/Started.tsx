import Image from "next/image";
import { startedData } from "./data";

const Started = () => {
  return (
    <>
      <section className=" bg-[#000]  padding-top">
        <div className="section-width">
          <div
            className="text-center"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            <h2>
              Get Started{" "}
              <span className="bg-gradient-to-r from-blue-500 to-[#520147] text-transparent bg-clip-text">
                {" "}
                in Just a Few clicks
              </span>
            </h2>
          </div>
          {startedData.map((item, i) => (
            <div className="md:flex pt-20 mb-10  md:mb-36" key={i}>
              <div
                className="basis-[100%] flex items-center justify-center md:pr-10"
                data-aos="fade-right"
                data-aos-duration="1100"
              >
                <div className="pb-10">
                  <h3>
                    {item.title}
                    <span className="bg-gradient-to-r from-blue-500 to-[#520147] text-transparent bg-clip-text">
                      {" "}
                      {item.span}
                    </span>
                  </h3>
                  <p>{item.desc}</p>
                </div>
              </div>
              <div
                className="basis-[100%]  rounded-lg border border-[#1e1e1e] "
                data-aos="fade-left"
                data-aos-duration="1100"
              >
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
