import Image from "next/image";
import { solutionData } from "./data";

const Solutions = () => {
  return (
    <section className="padding-top  pb-20 bg-[#000]">
      <div className="section-width">
        <div className="flex items-center justify-center">
          <div className="text-center  text-white w-[900px]">
            <h2>
              Crafting Solutions for{" "}
              <span className="bg-gradient-to-r from-blue-500 to-[#520147] text-transparent bg-clip-text">
                Tomorrow's Challenges
              </span>
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 pt-20">
          {solutionData.map((item, i) => (
            <div
              className="bg-gradient-to-t from-[#0b0e1c] to-[#000] p-5 rounded-lg border border-[#181818]"
              key={i}
            >
              <div className="border border-[#181818] rounded-md">
                <Image src={item.img} alt="" width={1000} height={1000} />
              </div>
              <div>
                <p className="text-2xl text-white font-semibold text-center py-5">
                  {item.title}
                </p>
                <p className="text-center text-[#b1b0b0]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
