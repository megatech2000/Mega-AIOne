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
import { teamData } from "./data";

const Teams = () => {
  return (
    <div className="relative">
      <div className="bg-gradient-to-t from-[#000] to-transparent z-[1] absolute top-[-200px] md:top-[-260px] w-full h-full"></div>
      <section className="padding-top bg-[#000] border-t-transparent">
        <div className="section-width">
          <div className="text-center pb-20 ">
            <p>Trusted by Professionals and Teams</p>
          </div>
          <div className="flex gap-20">
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              loop={true}
              centeredSlides={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 5,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
              modules={[Autoplay]}
              className="mySwiper w-full"
            >
              {teamData[0].image.map((item, i) => (
                <SwiperSlide key={i}>
                  <div>
                    <Image
                      className="w-28"
                      src={item}
                      alt=""
                      width={600}
                      height={600}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teams;
