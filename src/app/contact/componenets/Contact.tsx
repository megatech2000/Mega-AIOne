const Contact = () => {
  return (
    <section className="section-width">
      <div>
        <div className="text-center">
          <h4 className="text-[#4838af]">Contact Sales</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div className=" pt-10 w-full lg:px-36">
        <form>
          <div className="md:flex mb-[1rem] ">
            <div className="md:mr-[1rem] text-white w-full">
              <label htmlFor="firstName ">First Name</label>
              <br />
              <input
                type="text"
                id="firstName"
                className=" py-3 rounded-lg border bg-[#040712] border-[#2e2e2e] mt-2 w-full"
              />
            </div>
            <div className="md:mr-[1rem] text-white mt-5 md:mt-0 w-full">
              <label htmlFor="lastName">Last Name</label>
              <br />
              <input
                type="text"
                id="lastName"
                className="w-full py-3 rounded-lg border  bg-[#040712] border-[#2e2e2e]  mt-2"
              />
            </div>
          </div>
          <div className="mt-5 md:mt-10 md:flex mb-[1rem]">
            <div className="md:mr-[1rem] text-white w-full">
              <label htmlFor="Email">Email</label>
              <br />
              <input
                type="email"
                id="Email"
                className="w-full py-3 rounded-lg border bg-[#040712] border-[#2e2e2e] mt-2"
              />
            </div>
            <div className="mt-5 md:mt-0 md:mr-[1rem] text-white w-full">
              <label htmlFor="Phone number">Phone number</label>
              <br />
              <input
                type="text"
                id="Phone number"
                className="w-full py-3 rounded-lg border  bg-[#040712] border-[#2e2e2e]  mt-2"
              />
            </div>
          </div>

          <div className="md:mr-[1rem] text-white mt-10">
            <label htmlFor="Phone number">Message</label>
            <br />
            <textarea
              id="Phone number"
              placeholder="Type your message...."
              className="w-full p-3  h-36 rounded-lg border  bg-[#040712] border-[#2e2e2e]  mt-2"
            />
          </div>

          <div className="text-center py-5">
            <button
              type="submit"
              className="px-10 py-3 bg-blue-600 rounded-lg text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
