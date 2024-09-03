import React from 'react';

const testimonials = [
  {
    name: 'John Doe',
    role: 'Farmer',
    message: 'Agrotechh has transformed the way I do business. I now have guaranteed buyers for my produce!',
  },
  {
    name: 'Jane Smith',
    role: 'Buyer',
    message: 'Finding reliable suppliers has never been easier. The platform’s features make the process seamless.',
  },
  // Add more testimonials as needed
];

function TestimonialsSection() {
  return (
    <section className="py-16 px-8 bg-lightgreen" id="testimonials">
      <h2 className="text-3xl font-extrabold text-center mb-12 text-darkgreen">What Our Users Say</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-beige p-6 rounded-lg shadow-md max-w-xs text-center"
          >
            <p className="text-lg italic mb-4 text-darkgreen">"{testimonial.message}"</p>
            <p className="font-semibold text-darkgreen">{testimonial.name}</p>
            <p className="text-darkgreen">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
