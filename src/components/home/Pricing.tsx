"use client";

import { TiTick } from "react-icons/ti";
import { pricingData } from "./data";
import React, { useState } from "react";

const Pricing = () => {
  const [showMonthly, setShowMonthly] = useState(true);

  // Filter the pricing data based on the selected option
  const filteredData = showMonthly
    ? pricingData.filter((item) => item.label === "monthly")
    : pricingData.filter((item) => item.label === "year");

  return (
    <div className="relative">
      <div className="bg-gradient-to-t from-[#000] to-transparent z-[1] absolute top-[-200px] md:top-[-1000px] lg:top-[-100px]  w-full h-[10%]"></div>
      <section className="px-5 md:px-[100px] py-36 bg-[#000]">
        <div>
          <div className="text-center">
            <h2 className="text-4xl text-white md:text-5xl font-medium leading-tight">
              Pricing{" "}
              <span className="bg-gradient-to-r from-blue-500 to-[#520147] text-transparent bg-clip-text">
                {" "}
                Plan{" "}
              </span>
            </h2>
            <p className="text-white py-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div
              className={`text-white px-10 py-3 rounded-l-lg border border-[#212121] bg-[#111] hover:bg-[#335a81] cursor-pointer ${
                showMonthly ? "bg-[#335a81]" : ""
              }`}
              onClick={() => setShowMonthly(true)}
            >
              <p>Monthly</p>
            </div>
            <div
              className={`text-white border border-[#212121] px-10 py-3 rounded-r-lg bg-[#111] hover:bg-[#335a81] cursor-pointer ${
                !showMonthly ? "bg-[#335a81]" : ""
              }`}
              onClick={() => setShowMonthly(false)}
            >
              <p>Yearly</p>
            </div>
          </div>
          <div className="grid grid-cols-1  xl:grid-cols-3 gap-5 py-10">
            {filteredData.map((item, i) => (
              <div
                className="text-white bg-[#080d1e] bg-gradient-to-t from-[#1f0f1f] to-transparent rounded-lg relative border border-[#272727]"
                key={i}
              >
                <div className="p-10">
                  <h3 className="pb-3 text-2xl font-semibold ">{item.head}</h3>
                  <p>{item.desc}</p>
                  <h1 className="py-28 text-6xl font-bold text-white z-50">
                    ${item.price}/mo
                  </h1>
                  <div className="z-50">
                    <button className="w-full py-4 bg-[#2d589e] rounded-xl hover:bg-[#4972b8]">
                      Get Started
                    </button>
                  </div>
                  {item.title.map((items, i) => (
                    <div
                      className="text-white flex items-center gap-5 pt-10"
                      key={i}
                    >
                      <TiTick />
                      <p>{items}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
