import React from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "20731a35-a2eb-461a-9a2b-3cc2855900a9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      toast.success("Message Sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b py-20 sm:py-28 lg:py-32"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-72"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 aspect-[1155/678] w-[72rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr opacity-30 sm:w-[120rem]"
        />
      </div>

      {/* Header */}
      <div className="mx-auto max-w-2xl text-center">
        <div className="text-center mb-12 px-4 sm:px-6 lg:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8">
            Contact With Us
          </h2>
          <div className="w-16 sm:w-24 md:w-32 lg:w-40 h-1 mx-auto bg-black rounded" />
        </div>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          Looking for your dream home or planning to sell? Share your details
          and our team will guide you every step of the way.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={onSubmit}
        className="mx-auto mt-12 max-w-2xl sm:mt-16 p-8 sm:p-12 bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg"
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="full-name"
              className="block text-sm font-semibold text-gray-900"
            >
              Full Name
            </label>
            <input
              id="full-name"
              name="full-name"
              type="text"
              placeholder="John Doe"
              className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 shadow-sm outline-none sm:text-sm"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-900"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 shadow-sm outline-none sm:text-sm"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold text-gray-900"
            >
              Phone Number
            </label>
            <input
              id="phone-number"
              name="phone-number"
              type="text"
              placeholder="123-456-7890"
              className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 shadow-sm outline-none sm:text-sm"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-900"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Write your message here..."
              className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 shadow-sm outline-none sm:text-sm"
              required
            />
          </div>
        </div>

        <div className="mt-6 flex items-start gap-x-3">
          <input
            id="agree-to-policies"
            name="agree-to-policies"
            type="checkbox"
            className="h-5 w-5 rounded border-gray-300 text-black"
            required
          />
          <label
            htmlFor="agree-to-policies"
            className="text-sm text-gray-600"
          >
            By selecting this, you agree to our{" "}
            <a href="#" className="font-semibold text-black hover:underline">
              privacy policy
            </a>
            .
          </label>
        </div>

        <div className="mt-8">
          <button
            type="submit"
            className="w-full rounded-lg bg-black px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-gray-800 focus:ring-2 focus:ring-black focus:ring-offset-2 transition"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
