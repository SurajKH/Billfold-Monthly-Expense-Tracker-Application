import React, { useState } from 'react';

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    { id: 1, question: '1.What are the services offered?', answer:'provision for systematic financial planning, calculation of investment amount and prediction for the future, Chart Visualizations for the different set of calculations.' },
    { id: 2, question: '2.How is security handled for the application.', answer: 'Jwt-Token Based Authentication and definition of token expiry for a given session.' },
    { id: 3, question: '3.What is tech stack used for the application', answer: 'Frontend its ReactJS,TailwindCSS and for backend its SpringBoot, and in terms of Database its a combination of MySQL and Firebase.' },
    // Add more FAQs as needed
  ]);

  return (
    <div className="max-w-2xl mx-auto p-6  rounded-md shadow-md bg-black mb-12 w-3/4">
      <h1 className="text-3xl font-bold mb-4 text-white">Frequently Asked Questions</h1>
      <ul className="space-y-6">
        {faqs.map((faq) => (
          <li key={faq.id}>
            <div className="text-lg font-semibold text-white">{faq.question}</div>
            <div className="text-white">{faq.answer}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
