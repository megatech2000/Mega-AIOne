import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Locations = () => {
  return (
    <section className="section-width section-padding">
      <div className="text-center">
        <h3>Our locations</h3>
        <p className="pb-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <div>
            <Image
              src="/images/contact-img-1.jpg"
              alt=""
              width={1000}
              height={1000}
            />
          </div>
          <div className="text-center flex flex-col gap-5 pt-5 ">
            <h4 className="mb-0">New York</h4>
            <p>123 Sample St, New York NY 10000 USA</p>
            <a href="">
              <div className="flex items-center  justify-center gap-3">
                <p className="hover:text-white">Get Directions</p>
                <MdOutlineKeyboardArrowRight className="text-white text-2xl" />
              </div>
            </a>
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <div>
            <div>
              <Image
                src="/images/contact-img-2.jpg"
                alt=""
                width={1000}
                height={1000}
              />
            </div>
            <div className="text-center flex flex-col gap-5 pt-5">
              <h4 className="mb-0">Silicon Valley</h4>
              <p>123 Sample St, Valley NSW 2034 AU</p>
              <a href="">
                <div className="flex items-center  justify-center gap-3">
                  <p className="hover:text-white">Get Directions</p>
                  <MdOutlineKeyboardArrowRight className="text-white text-2xl" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
