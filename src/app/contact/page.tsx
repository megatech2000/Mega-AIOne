import dynamic from "next/dynamic";

const Questions = dynamic(() => import("../contact/componenets/Questions"));
const Contact = dynamic(() => import("../contact/componenets/Contact"));
const Locations = dynamic(() => import("../contact/componenets/Locations"));

const contactPage = () => {
  return (
    <section>
      <div>
        <Questions />
        <Contact />
        <Locations />
      </div>
    </section>
  );
};

export default contactPage;
