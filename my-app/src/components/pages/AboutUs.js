import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-[#FEF8D8] p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md p-8">
        <h1 className="text-4xl text-center text-[#3B580F] font-bold mb-6">About Agrotechh</h1>

        <section className="mission-vision mb-6">
          <h2 className="text-2xl text-[#3A5614] font-semibold mb-4">Mission</h2>
          <p className="text-lg text-gray-700 mb-6">
            Empowering farmers with reliable market access through secure contracts and transparent negotiations.
          </p>

          <h2 className="text-2xl text-[#3A5614] font-semibold mb-4">Vision</h2>
          <p className="text-lg text-gray-700">
            Enhancing income stability by connecting farmers with guaranteed buyers, reducing market risks.
          </p>
        </section>

        <section className="problem-solution mb-6">
          <h2 className="text-2xl text-[#3A5614] font-semibold mb-4">Our Solution</h2>
          <p className="text-lg text-gray-700 mb-4">
            We solve the problem of fluctuating market access and income for farmers by providing:
          </p>
          <ul className="list-none space-y-2">
            <li><strong className="text-[#3B590E]">Secure Contracts:</strong> Transparent, enforceable agreements.</li>
            <li><strong className="text-[#3B590E]">Price Negotiation:</strong> Real-time negotiation tools.</li>
            <li><strong className="text-[#3B590E]">Market Insights:</strong> Data-driven decision-making for farmers.</li>
            <li><strong className="text-[#3B590E]">Timely Payments:</strong> Prompt, secure payments for produce.</li>
          </ul>
        </section>

        <section className="team-partnerships">
          <h2 className="text-2xl text-[#3A5614] font-semibold mb-4">Our Team & Partnerships</h2>
          <p className="text-lg text-gray-700">
            Our expert team collaborates with agricultural institutions and NGOs to support farmers with tools and resources.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
