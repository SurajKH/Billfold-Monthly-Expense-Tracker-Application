import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { investmentbenefits } from '../utils/InvestmentBenefits';
import InvestmentCard from './InvestmentCard';
const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="flex flex-col lg:flex-row bg-teal-50">
      {/* Half for Image */}
      <div className="lg:w-1/2">
        <img
          src="https://img.freepik.com/premium-vector/save-money-concept_24877-4823.jpg"  // Replace with your image source
          alt="Sample"
          className="w-full h-full object-cover p-12"
        />
      </div>

      {/* Half for Card with Text */}
      <div className="lg:w-1/2 p-12">
      <h2 className="text-3xl font-bold mb-4">Inspirational Quotes.</h2>
      <div className="border border-teal-300 rounded p-4 mb-4 shadow-lg">
  <h2 className="text-3xl font-bold mb-4">Savings</h2>
  <p className="text-gray-600">
    “Do not save what is left after spending, but spend what is left after saving.” – Warren Buffett.
  </p>
</div>

<div className="border border-teal-300 rounded p-4 mb-4 shadow-lg">
  <h2 className="text-3xl font-bold mb-4">Investments</h2>
  <p className="text-gray-600">
  “The stock market is a device for transferring money from the impatient to the patient.” – Warren Buffett.
  </p>
</div>

<div className="border border-teal-300 rounded p-4 mb-4 shadow-lg">
  <h2 className="text-3xl font-bold mb-4">Stock Market</h2>
  <p className="text-gray-600">
  “Bottoms in the investment world don't end with four-year lows, they end with 10- or 15-year lows.” – By Jim Rogers.
  </p>
</div>
        



        {/* <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
          Learn More
        </button> */}
      </div>
    </div>
    {/* <div>
        <h1>Benefits of Investments</h1>
        <div>
          <h1> Tax Benefits  </h1>
          <p>the government offers tax benefits to individuals who invest in certain investment plans under the Income Tax Act, of 1961. These investment plans are designed to encourage people to save for their future and reduce their tax liability at the same time. The tax benefits associated with investment plans can be in the form of tax deductions, exemptions, or tax-free returns on investments.</p>
        </div>
      </div> */}
      <div className=' bg-teal-100'>
      <div className='pt-12 pb-12'>
      <p className="mx-auto w-1/2 text-2xl text-white bg-gray-800 p-4 rounded-lg">
        Benefits of Investment (Financial Planning)
      </p>
      </div>
      <div className="flex justify-center items-center ml-12 mr-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {investmentbenefits.map((item) => (
          <InvestmentCard key={item.id} {...item} />
        ))}
      </div>
    </div>
      </div>
     
    <Footer/>
    </>
   
  );
};

export default Home;
