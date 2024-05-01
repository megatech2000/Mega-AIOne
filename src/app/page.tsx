"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";

const Banner = dynamic(() => import("../components/home/Banner"));
const Teams = dynamic(() => import("../components/home/Teams"));
const Solutions = dynamic(() => import("../components/home/Solutions"));
const Industries = dynamic(() => import("../components/home/Industries"));
const Started = dynamic(() => import("../components/home/Started"));
const Process = dynamic(() => import("../components/home/Process"));
const Pricing = dynamic(() => import("../components/home/Pricing"));
const Cases = dynamic(() => import("../components/home/Cases"));
const AllinOne = dynamic(() => import("../components/home/AllinOne"));
const Testimonials = dynamic(() => import("../components/home/Testimonials"));
const Faqs = dynamic(() => import("../components/home/Faqs"));
const Transform = dynamic(() => import("../components/home/Transform"));
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div>
        <Banner />
        <Teams />
        <Solutions />
        <Industries />
        <Started />
        <Process />
        <Pricing />
        <Cases />
        <AllinOne />
        <Testimonials />
        <Faqs />
        <Transform />
      </div>
    </div>
  );
}
