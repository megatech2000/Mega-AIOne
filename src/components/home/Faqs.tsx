"use client";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { faqsData } from "./data";
import { useState } from "react";

const Faqs = () => {
  const [accordionIds, setAccordionIds] = useState<number[]>([]);

  const handleClick = (id: number) => {
    if (accordionIds.includes(id)) {
      setAccordionIds(accordionIds.filter((accId) => accId !== id));
    } else {
      setAccordionIds([...accordionIds, id]);
    }
  };

  return (
    <section className="px-5 md:px-[100px] py-36 bg-[#000]">
      <div className="flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl text-white md:text-5xl font-medium leading-tight">
            FAQs
          </h1>
          <p className="text-white pt-5 pb-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>

        {/* Accordion */}
        {faqsData &&
          faqsData.map((item, index) => (
            <div className="w-full lg:w-[70%] mt-5" key={index}>
              <h6 className="mb-0" onClick={() => handleClick(item.id)}>
                <button className="relative flex items-center w-full p-7 bg-gradient-to-t from-[#080814] to-[#02020a] font-semibold text-left transition-all ease-in border rounded-xl cursor-pointer text-white border-[#202020] ">
                  <span className="text-sm md:text-md">{item.title}</span>
                  {accordionIds.includes(item.id) ? (
                    <MdKeyboardArrowUp className="absolute right-0 pt-1 text-4xl text-white transition-transform" />
                  ) : (
                    <MdKeyboardArrowDown className="absolute right-0 pt-1 text-4xl text-white transition-transform" />
                  )}
                </button>
              </h6>
              {accordionIds.includes(item.id) && (
                <div
                  className={`p-10 text-sm leading-normal text-white bg-gradient-to-t from-[#05050c] to-[#02020a] rounded-xl border border-[#121212] ${
                    accordionIds.includes(item.id) ? "open" : ""
                  }`}
                  key={index}
                >
                  {item.desc}
                </div>
              )}
            </div>
          ))}
        {/* End of Accordion */}
      </div>
      <div className="text-white text-center py-20">
        <h1 className="text-2xl text-white md:text-4xl font-medium leading-tight">
          Still have questions?
        </h1>
        <p className="py-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div>
          <button className="px-7 py-2 border rounded-lg hover:bg-white hover:text-black scroll-menu ">
            Contact
          </button>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
