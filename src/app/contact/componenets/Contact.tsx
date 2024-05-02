const Contact = () => {
  return (
    <section className="section-width">
      <div>
        <div className="text-center">
          <h4 className="text-[#4838af]">Contact Sales</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div className="flex items-center justify-center pt-10">
        <form>
          <div style={{ display: "flex", marginBottom: "1rem" }}>
            <div style={{ marginRight: "1rem", color: "white" }}>
              <label htmlFor="firstName ">First Name</label>
              <br />
              <input
                type="text"
                id="firstName"
                className="px-36 py-3 rounded-lg border bg-[#040712] border-[#2e2e2e] mt-2"
              />
            </div>
            <div style={{ marginRight: "1rem", color: "#fff" }}>
              <label htmlFor="lastName">Last Name</label>
              <br />
              <input
                type="text"
                id="lastName"
                className="px-36 py-3 rounded-lg border  bg-[#040712] border-[#2e2e2e]  mt-2"
              />
            </div>
          </div>
          <div
            style={{ display: "flex", marginBottom: "1rem" }}
            className="mt-10"
          >
            <div style={{ marginRight: "1rem", color: "white" }}>
              <label htmlFor="Email">Email</label>
              <br />
              <input
                type="email"
                id="Email"
                className="px-36 py-3 rounded-lg border bg-[#040712] border-[#2e2e2e] mt-2"
              />
            </div>
            <div style={{ marginRight: "1rem", color: "#fff" }}>
              <label htmlFor="Phone number">Phone number</label>
              <br />
              <input
                type="text"
                id="Phone number"
                className="px-36 py-3 rounded-lg border  bg-[#040712] border-[#2e2e2e]  mt-2"
              />
            </div>
          </div>
          <div style={{ marginRight: "1rem", color: "#fff" }} className="mt-10">
            <label htmlFor="Phone number">Phone number</label>
            <br />
            <input
              type="text"
              id="Phone number"
              className="w-full py-3 rounded-lg border  bg-[#040712] border-[#2e2e2e]  mt-2"
            />
          </div>

          <div style={{ marginRight: "1rem", color: "#fff" }} className="mt-10">
            <label htmlFor="Phone number">Message</label>
            <br />
            <textarea
              id="Phone number"
              placeholder="Type your message...."
              className="w-full p-3  h-36 rounded-lg border  bg-[#040712] border-[#2e2e2e]  mt-2"
            />
          </div>
          <div className="py-5">
            <input type="checkbox" id="myCheckbox" name="myCheckbox" />
            <label for="myCheckbox" className="text-white ml-5 text-sm">
              I accept the{" "}
              <a href="">
                <span className="underline"> Terms and Conditions</span>
              </a>
            </label>
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
