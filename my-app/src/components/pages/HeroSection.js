import React from 'react';

function HeroSection() {
  return (
    <section className="bg-lightgreen text-maingreen py-12 px-6 text-center">
      {/* Hero Content */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-4 text-green">Welcome to Agrotechh</h1>
        <p className="text-lg mb-6 text-darkgreen">Your trusted partner for contract farming and secure market access.</p>
        <a
          href="#get-started"
          className="bg-green text-beige py-2 px-6 rounded-full text-lg font-semibold hover:bg-maingreen transition duration-300"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
