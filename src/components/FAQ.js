import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'Do you accept walk-ins?',
      answer: 'Yes, we welcome walk-ins based on availability. However, we highly recommend booking an appointment to ensure your preferred time slot and stylist.'
    },
    {
      question: 'What are your business hours?',
      answer: 'We are open Monday through Saturday from 9:00 AM to 7:00 PM, and Sunday from 10:00 AM to 5:00 PM. Holiday hours may vary.'
    },
    {
      question: 'Do you offer services for men?',
      answer: 'Absolutely! We offer a full range of services for men including haircuts, beard trims, facials, and grooming treatments.'
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'We require at least 24 hours notice for cancellations or rescheduling. Late cancellations may incur a fee. We appreciate your understanding.'
    },
    {
      question: 'What products do you use?',
      answer: 'We use only premium, professional-grade products from trusted brands. Our stylists can recommend products for your specific hair type and concerns.'
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-salon-dark mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Got questions? We've got answers!
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-salon-beige rounded-lg shadow-md overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-opacity-80 transition-colors"
              >
                <span className="text-lg font-semibold text-salon-dark pr-8">
                  {faq.question}
                </span>
                <svg 
                  className={`w-6 h-6 text-salon-gold transform transition-transform duration-300 flex-shrink-0 ${activeIndex === index ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-700">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

