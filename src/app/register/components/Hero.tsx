import Image from "next/image";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="h-full bg-login  relative">
      <div className="bg-overlay absolute w-full bottom-0 h-full"></div>
      <div className="flex items-center justify-between section-width ">
        <div className="z-50">
          <a href="/">
            <Image
              className="w-28 "
              src="/images/logo.png"
              alt=""
              width={500}
              height={500}
            />
          </a>
        </div>
        <div className="z-50 ">
          <p className="text-[10px] sm:text-base text-[#bbbaba]">
            Don't have an account yet?
            <a href="/login">
              <span className="underline hover:text-white">Log In</span>
            </a>
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-full py-10 px-5 md:px-0">
        <div className="bg-[#090a1f] w-full md:w-[50%]  lg:w-[35%] text-white z-50 text-center p-5 md:p-10 rounded-lg">
          <h2 className="mb-0 text-[#4838af]">Sign Up</h2>
          <p className="py-10 text-white">
            Lorem ipsum dolor sit amet adipiscing elit.
          </p>
          <div>
            <form action="">
              <input
                type="email"
                placeholder="Email"
                className="w-full h-12 mb-3 rounded-lg bg-transparent border border-[#2a2a2a] p-3"
              />
              <br />
              <input
                type="text"
                placeholder="Password"
                className="w-full h-12 mb-3 rounded-lg bg-transparent border p-3 border-[#2a2a2a]"
              />
              <input
                type="text"
                placeholder="Confirm Password"
                className="w-full h-12 mb-3 rounded-lg bg-transparent border p-3 border-[#2a2a2a]"
              />

              <div className="w-full">
                <button className="w-full py-3 bg-[#4348ed]  text-white rounded-lg hover:bg-[#4348ed] hover:opacity-80">
                  Log In
                </button>
              </div>
            </form>
            <hr className="mt-7 mb-7 bg-hr border border-[#272727]" />
            <div>
              <button className="w-full py-3 bg-transparent border border-[#868585] text-white rounded-lg flex items-center justify-center gap-5 mb-3 hover:bg-[#0c0d1b]">
                <FaGoogle className="text-md text-[#9d9c9c]" />
                <p className="text-white text-base ">Log in with Google</p>
              </button>
              <button className="w-full py-3 bg-transparent border border-[#868585] text-white rounded-lg flex items-center justify-center gap-5 mb-3 hover:bg-[#0c0d1b]">
                <FaFacebookF className="text-lg text-[#9d9c9c]" />
                <p className="text-white text-base">Log in with Google</p>
              </button>
              <button className="w-full py-3 bg-transparent border border-[#868585] text-white rounded-lg flex items-center justify-center gap-5 hover:bg-[#0c0d1b]">
                <FaApple className="text-lg text-[#9d9c9c]" />
                <p className="text-white text-base">Log in with Google</p>
              </button>
            </div>
          </div>
          <div className="pt-10 ">
            <a href="">
              <p className="text-base text-white underline">
                Forgot your password?
              </p>
            </a>
          </div>
        </div>
        <div className=" text-center z-[1000]  pt-20">
          <p className="text-[#d2d1d1] text-sm ">© All Right Reserved</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
