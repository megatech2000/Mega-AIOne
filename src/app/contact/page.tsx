import dynamic from "next/dynamic";

const Questions = dynamic(() => import("../contact/componenets/Questions"));
const Contact = dynamic(() => import("../contact/componenets/Contact"));

const contactPage = () => {
  return (
    <section>
      <div>
        <Questions />
        <Contact />
      </div>
    </section>
  );
};

export default contactPage;
