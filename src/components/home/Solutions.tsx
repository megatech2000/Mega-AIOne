import Image from "next/image";
import { solutionData } from "./data";

const Solutions = () => {
  return (
    <section className="padding-top  pb-20 bg-[#000]">
      <div className="section-width">
        <div className="flex items-center justify-center">
          <div
            className="text-center  text-white w-[900px]"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            <h2>
              Crafting Solutions for{" "}
              <span className="bg-gradient-to-r from-blue-500 to-[#520147] text-transparent bg-clip-text">
                Tomorrow's Challenges
              </span>
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 pt-20 ">
          {solutionData.map((item, i) => (
            <div
              className="bg-gradient-to-t from-[#0b0e1c] to-[#000] p-5 rounded-lg border border-[#181818] "
              key={i}
              data-aos="fade-up"
              data-aos-duration="1100"
            >
              <div className="border border-[#181818] rounded-md">
                <Image src={item.img} alt="" width={1000} height={1000} />
              </div>
              <div>
                <h6 className="py-5">{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
