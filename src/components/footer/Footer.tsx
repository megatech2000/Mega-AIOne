import Image from "next/image";
import { Input } from "postcss";
import { footerData } from "../home/data";
import { SiFacebook } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <section className=" bg-[#000] pt-36">
      <div className="section-width">
        <div className="bg-gradient-to-t from-[#0a0a18] to-[#08081e] rounded-xl p-10">
          <div className="lg:flex items-center justify-between">
            <div className="text-white">
              <p className="text-2xl font-semibold pb-3 ">
                Join our newsletter
              </p>
              <p className="text-[#aeadad]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="text-white pt-10 lg:pt-0">
              <form action="" className="md:flex gap-3">
                <input
                  className="w-60 px-3 py-2 rounded-md bg-gradient-to-t from-[#040407] to-[#060614] border border-[#2a2929]"
                  type="gmail"
                  placeholder="Enter Your email"
                />
                <button className="px-7 py-2 border rounded-md mt-3 md:mt-0">
                  Subscribe
                </button>
              </form>
              <div>
                <p className="text-sm pt-5 text-[#aeadad]">
                  By subscribing you agree to with our{" "}
                  <a href="">
                    <span className="underline "> Privacy Policy</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex">
          <div className="basis-[100%]  pt-20">
            <div>
              <Image
                className="w-36"
                src="/images/logo.png"
                alt=""
                width={1000}
                height={10000}
              />
            </div>
            <div className="pt-5 w-full md:w-[500px]">
              <p className=" text-[#878686]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
          </div>
          <div className="basis-[100%] flex   pt-20">
            {footerData.map((item, i) => (
              <div className="basis-[100%] text-white" key={i}>
                <div className="">
                  <p className="text-lg font-bold">{item.head}</p>
                </div>

                <div className="pt-5 flex flex-col gap-5 text-[#878686]">
                  {item.title.map((items) => (
                    <p>{items}</p>
                  ))}
                </div>
              </div>
            ))}
            {/* end */}
          </div>
        </div>
        <hr className="mt-10 " />
        <div className="lg:flex justify-between items-center py-10">
          <div>
            <div className="text-white">
              <p className="text-sm text-[#878686]">
                Made by <span className="underline"> Factortheme.</span> Powered
                by <span className="underline"> Webflow.</span>
                <span className="underline lg:pl-10"> Terms of Service</span>
                <span className="underline"> Cookies Setting</span>
              </p>
            </div>
          </div>
          <div className="flex gap-5 pt-5 lg:pt-0">
            <div className="text-white  p-3 rounded-md border border-[#161616]">
              <SiFacebook />
            </div>
            <div className="text-white  p-3 rounded-md border border-[#161616]">
              <FaInstagram />
            </div>
            <div className="text-white  p-3 rounded-md border border-[#161616]">
              <FaXTwitter />
            </div>
            <div className="text-white  p-3 rounded-md border border-[#161616]">
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
