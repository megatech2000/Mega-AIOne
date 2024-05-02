import Image from "next/image";
import { LuUsers } from "react-icons/lu";
import { BsChatLeftTextFill } from "react-icons/bs";
import { FaShoppingBag } from "react-icons/fa";

const Questions = () => {
  return (
    <section className="section-width">
      <div className="flex justify-between items-center">
        <div>
          <Image
            className="w-28"
            src="/images/logo.png"
            alt=""
            width={1000}
            height={1000}
          />
        </div>
        <div>
          <p>
            Go Back to{" "}
            <a href="/">
              <span className="underline hover:text-white cursor-pointer">
                {" "}
                Home Page{" "}
              </span>
            </a>
          </p>
        </div>
      </div>
      <div className=" text-center pt-36 ">
        <div>
          <h2 className="font-normal text-[#4838af]">Got any Questions?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in ero.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 pt-20">
        <div className=" flex flex-col items-center justify-center">
          <div className=" text-6xl text-[#969494] bg-[#0f0f0f] rounded-xl p-4 ">
            <LuUsers />
          </div>
          <h3 className="pt-5 font-semibold">Sales</h3>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in ero.
          </p>
          <div className=" pt-5">
            <button className="px-10 py-2 bg-transparent border rounded-xl text-white">
              Contact Sales
            </button>
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center py-10 md:py-0">
          <div className=" text-6xl text-[#969494] bg-[#0f0f0f] rounded-xl p-4 ">
            <BsChatLeftTextFill />
          </div>
          <h3 className="pt-5 font-semibold">Live Chat</h3>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in ero.
          </p>
          <div className="pt-5">
            <button className="px-10 py-2 bg-transparent border rounded-xl text-white">
              Contact Sales
            </button>
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <div className=" text-6xl text-[#969494] bg-[#0f0f0f] rounded-xl p-4 ">
            <FaShoppingBag />
          </div>
          <h3 className="pt-5 font-semibold">Media & Press</h3>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in ero.
          </p>
          <div className="pt-5">
            <button className="px-10 py-2 bg-transparent border rounded-xl text-white">
              Contact Sales
            </button>
          </div>
        </div>

        {/* end */}
      </div>
      <div>
        <div className="text-center py-56">
          <h5>General enquiries</h5>
          <p>
            For general queries, including partnership opportunities, please
            email{" "}
            <span className="hover:text-white underline cursor-pointer">
              {" "}
              hello@companyname.com{" "}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Questions;
