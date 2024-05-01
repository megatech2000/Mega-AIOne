"use client";
import Image from "next/image";

// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";
import React, { createContext } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";
import { testimonialsData } from "./data";

const Testimonials = () => {
  return (
    <section className="padding-top bg-[#000]">
      <div className="section-width">
        <div
          className="text-center"
          data-aos="fade-right"
          data-aos-duration="1100"
        >
          <h1 className="text-4xl md:text-5xl font-medium leading-snug text-white">
            You're in{" "}
            <span className="bg-gradient-to-r from-blue-500 to-[#520147] text-transparent bg-clip-text">
              {" "}
              Good Company
            </span>
          </h1>
          <p className="text-white ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div
          className="flex gap-5 pt-20 "
          data-aos="fade-right"
          data-aos-duration="1100"
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper w-full"
          >
            {testimonialsData.map((item, i) => (
              <SwiperSlide>
                <div className="bg-[#030309] border border-[#1d1d1d] p-5 rounded-xl">
                  <div>
                    <p className="text-[#989797] py-5">{item.desc}</p>
                  </div>
                  <div className="flex gap-5 items-center">
                    <div>
                      <Image
                        className="w-14 rounded-full"
                        src={item.icon}
                        alt=""
                        width={600}
                        height={600}
                      />
                    </div>
                    <div>
                      <p className="text-white">{item.head}</p>
                      <p className="text-[#989797]">{item.title}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* end */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
