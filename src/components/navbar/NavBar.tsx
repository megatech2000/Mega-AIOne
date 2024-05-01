"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Feature",
      path: "#",
    },
    {
      title: "Pricing",
      path: "#",
    },
    {
      title: "Faq",
      path: "#",
    },
    {
      title: "Contact",
      path: "#",
    },
  ];

  return (
    <section className="absolute w-full top-0">
      <div className="flex items-center justify-between  p-5  md:px-[100px]">
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
          className={`md:flex gap-10 absolute top-[80px]  left-0 w-full  h-[100vh] md:h-16 bg-black md:bg-transparent md:w-[50%] lg:w-[30%] md:static px-10 md:px-0
        ${isMenuOpen ? "" : "hidden"}`}
        >
          {links.map((item, i) => (
            <div className="text-white scroll-menu py-2">
              <Link href={item.path} key={i}>
                {item.title}
              </Link>
            </div>
          ))}
          <div className="md:hidden text-center">
            <button className="px-10 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400">
              Log In
            </button>
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
          <button className="px-10 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400">
            Log In
          </button>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
