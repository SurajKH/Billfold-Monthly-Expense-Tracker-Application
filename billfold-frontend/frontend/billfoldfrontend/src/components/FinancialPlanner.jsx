import React from 'react';
import WavingHand from './WavingHand';
import Navbar from './Navbar';
import Cards from './Cards';
import Footer from './Footer';

const FinancialPlanner = () => {
  return (
    <div>
        <Navbar/>
        <div className="flex w-1/2 mx-auto mb-12">
  {/* Main Box */}
  <div className="w-1/2 mx-auto mt-12 p-8 bg-blue-100 rounded-lg shadow-md">
    <p className="text-2xl text-center mb-4 flex items-center justify-center">
      Hi, I am your Fin Planner!! <WavingHand />
    </p>
    <p className="text-2xl text-center mt-4 font-bold text-gray-800">
      Different Types of Plans
    </p>
  </div>

  {/* Another Box */}
  <div className="w-1/2 mx-auto mt-12 p-8 bg-green-100 rounded-lg shadow-md ml-12">
    {/* Replace bg-green-100 with your preferred color */}
    <p className="text-2xl text-center mb-4">Note: Make your choice for any of the below Plans to get the know the Benefits associated with them.</p>
    {/* Add content for the second box here */}
  </div>
</div>


        <div style={{ backgroundImage: 'url("https://www.shutterstock.com/image-photo/stock-funding-money-saving-graph-600nw-2030743190.jpg")', backgroundSize: 'cover'}}>
          <Cards/>
        </div>
        <Footer/>
    </div>
  )
}

export default FinancialPlanner;
