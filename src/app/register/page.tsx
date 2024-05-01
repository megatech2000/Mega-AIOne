import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../register/components/Hero"));

const registerPage = () => {
  return (
    <div>
      <div>
        <Hero />
      </div>
    </div>
  );
};

export default registerPage;
