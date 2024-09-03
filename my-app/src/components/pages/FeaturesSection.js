import React from 'react';
import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Secure Contracts',
    description: 'Ensure reliable agreements with digital contract management.',
    icon: '📄',
    link: '/secure-contracts',
  },
  {
    title: 'Price Negotiation',
    description: 'Easily negotiate prices with potential buyers.',
    icon: '💬',
    link: '/price-negotiation',
  },
  {
    title: 'Market Insights',
    description: 'Access valuable market analytics to make informed decisions.',
    icon: '📊',
    link: '/market-insights',
  },
  {
    title: 'Timely Payments',
    description: 'Experience prompt and secure payments for your produce.',
    icon: '💵',
    link: '/timely-payments',
  },
];

function FeaturesSection() {
  return (
    <section className="py-16 px-8 bg-lightgreen" id="features">
      <h2 className="text-3xl font-extrabold text-center mb-12 text-maingreen">Platform Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <Link
            key={index}
            to={feature.link}
            className="bg-beige p-6 rounded-lg shadow-lg text-center block"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-darkgreen">{feature.title}</h3>
            <p className="text-darkgreen">{feature.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
