import Image from "next/image";
import { industriesData } from "./data";

const Industries = () => {
  return (
    <section className=" bg-[#000]" id="feature">
      <div className="section-width">
        <div className="flex items-center justify-center">
          <div className="padding-top w-[800px] text-center">
            <h2>
              Revolutionizing Industries with{" "}
              <span className="bg-gradient-to-r from-blue-500 to-[#520147] text-transparent bg-clip-text">
                {" "}
                Advanced AI Technology
              </span>
            </h2>
            <p className="pt-5 pb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {industriesData.map((item, i) => (
            <div
              className=" flex flex-col mb-10 items-center justify-center p-5"
              key={i}
            >
              <div>
                <Image
                  className="w-14"
                  src={item.img}
                  alt=""
                  width={600}
                  height={600}
                />
              </div>
              <div className="text-center text-white">
                <h6 className="py-5">{item.title}</h6>
                <p className="text-sm text-[#aeadad]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
