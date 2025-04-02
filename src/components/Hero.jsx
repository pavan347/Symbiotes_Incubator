import React from "react";

const Hero = () => {
  return (
    <section className=" md:px-16 py-6 md:py-12 text-center">
      <div className="border-4 border-white rounded-2xl p-5 shadow-md">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-snug">
          Launch & Scale Your Startup—Without the Guesswork.
          <br />
        </h1>
        <h2 className="text-md md:text-l text-gray-600 font-extrabold">
          Breaking into the startup world is tough. Finding the right
          co-founder, validating ideas, and securing funding can feel
          impossible.
        </h2>
      </div>
      <p className="mt-6 text-lg md:text-xl text-gray-700">
        Our{" "}
        <strong className="text-primary font-bold">
          three-month incubator program{" "}
        </strong>{" "}
        removes the guesswork. We connect ambitious founders with{" "}
        <b>
          validated business ideas, expert mentorship, early customers, and
          investor networks
        </b>{" "}
        — giving you everything you need to{" "}
        <strong className="text-primary font-bold">
          build, launch, and scale a high-growth startup.
        </strong>
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">💡 Bring Your Own Idea</h3>
          <p className="text-gray-600">
        Work on your own innovative idea or choose from a list of vetted, high-potential opportunities.
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">🤝 Find the Perfect Co-Founder</h3>
          <p className="text-gray-600">
        Collaborate with like-minded individuals to find the ideal partner for your startup journey.
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">🚀 Turn Ideas Into Revenue</h3>
          <p className="text-gray-600">
        Transform your ideas into revenue-ready businesses with expert guidance and resources.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
