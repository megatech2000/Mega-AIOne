const Transform = () => {
  return (
    <section className="relative">
      <div className="bg-gradient-to-t from-transparent  to-[#000] z-[1] absolute top-0 w-full h-[30%]"></div>
      <div className="bg-gradient-to-t from-[#000]  to-transparent z-[1] absolute bottom-0 w-full h-[30%]"></div>
      <div className="py-20 md:py-28 bg-process">
        <div className="flex items-center justify-center section-width">
          <div
            className="text-white  text-center w-full lg:w-[55%]"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            <h2>Transform the Way You Work – Try Our AI One Today!</h2>
            <p className="mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <div>
              <button className="px-10 py-3 bg-[#3170ce] rounded-xl scroll-menu  cursor-pointer">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transform;
