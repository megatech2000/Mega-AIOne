import Image from "next/image";
import { caseData } from "./data";

const Cases = () => {
  return (
    <section className="padding-top bg-black">
      <div className="lg:flex section-width">
        <div className="basis-[50%] ">
          <div>
            <h2>
              Get Better Result with{" "}
              <span className="bg-gradient-to-r from-blue-500 to-[#520147] text-transparent bg-clip-text">
                {" "}
                Real World Use Cases{" "}
              </span>
            </h2>
            <p className="pt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
          </div>
        </div>
        <div className="basis-[50%] md:px-5 h-full md:h-[45vh] overflow-y-scroll bg-overflow mt-10 lg:mt-0">
          {caseData.map((item, i) => (
            <div
              className="bg-[#030309] p-10 rounded-lg border border-[#131313] mb-5 sticky top-0"
              key={i}
            >
              <div>
                <Image
                  className="w-10"
                  src={item.img}
                  alt=""
                  width={600}
                  height={600}
                />
              </div>
              <h4 className="py-5 text-2xl font-bold text-white">
                {item.title}
              </h4>
              <p className="text-[#aeadad]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
