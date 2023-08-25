import React, { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (activeIndex === index) {
      // Close the currently open FAQ
      setActiveIndex(null);
    } else {
      // Open the clicked FAQ
      setActiveIndex(index);
    }
  };

  return (
    <div className="lg:w-4/5 mx-auto">
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <div
            className={`flex justify-between items-center bg-gray-200 p-6 cursor-pointer ${
              activeIndex === index ? 'rounded-t-md' : 'rounded-md'
            }`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="lg:text-2xl font-semibold">{faq.question}</div>
            <div>{activeIndex === index ? '-' : '+'}</div>
          </div>
          {activeIndex === index && (
            <div className="lg:text-xl font-light text-gray-600 p-6 rounded-b-md">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
