"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

interface NavLink {
  title: string;
  path: string;
  target?: string;
}

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = [
    {
      title: "Home",
      path: "/",
      target: "home",
    },
    {
      title: "Feature",
      path: "#",
      target: "feature",
    },
    {
      title: "Pricing",
      path: "#",
      target: "pricing",
    },
    {
      title: "Faq",
      path: "#",
      target: "faq",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  const scrollToSection = (target: string) => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative z-[1000]">
      <section className="absolute w-full h-[100px] md:h-[300px] top-0 bg-gradient-to-t from-transparent to-[#101010] ">
        <div className="flex items-center justify-between  p-5 lg:section-width">
          <div>
            <Image
              className="w-28"
              src="/images/logo.png"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div
            className={`md:flex gap-10 absolute top-[80px]  left-0 w-full  h-[100vh] md:h-10 bg-black md:bg-transparent md:w-[50%] lg:w-[30%] md:static px-10 md:px-0 pt-10 md:pt-0
        ${isMenuOpen ? "" : "hidden"}`}
          >
            {links.map((item, i) => (
              <div className="text-white scroll-menu py-3" key={i}>
                <Link
                  onClick={() => item.target && scrollToSection(item.target)}
                  href={item.path}
                >
                  {item.title}
                </Link>
              </div>
            ))}

            <div className="h-[40%] flex items-end justify-center">
              <div className="md:hidden  w-full">
                <a href="/login">
                  <button className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400">
                    Log In
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="text-white text-2xl md:hidden">
            {!isMenuOpen && (
              <div onClick={toggleMenu}>
                <FaBarsStaggered />
              </div>
            )}
            {isMenuOpen && (
              <div onClick={toggleMenu}>
                <IoMdClose />
              </div>
            )}
          </div>
          <div className="hidden md:block ">
            <a href="/login">
              <button className="px-10 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400">
                Log In
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NavBar;
