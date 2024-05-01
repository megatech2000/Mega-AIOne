import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../login/components/Hero"));

const loginPage = () => {
  return (
    <section>
      <div>
        <div>
          <Hero />
        </div>
      </div>
    </section>
  );
};

export default loginPage;
