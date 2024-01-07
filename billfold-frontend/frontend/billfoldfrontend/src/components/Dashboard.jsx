import React, { useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Dashboard = () => {

    const [submitStatus,setsubmitStatus]=useState(false);

    const handleformSubmit=()=>
    {
        setsubmitStatus(true);
    }
  return (
    <>
         <Navbar/>
    
    <div className="max-w-md mx-auto p-6 border border-gray-300 shadow-md rounded-md m-12">
      <h2 className="text-2xl font-bold mb-4">Monthly Expenses</h2>
      <form onSubmit={handleformSubmit}>
      <h2 className="text-1xl font-bold mb-4">Monthly Wallet Amount: <input
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            required
          /> </h2>

      <div className="grid grid-cols-2 gap-4">
        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">Rent</label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">Grocery</label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">Travel</label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">Laundary</label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">Other Expenses</label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
      </div>

      

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        
      >
        Submit
      </button>
      </form>
      
    </div>

     {
        submitStatus &&
        <div className="max-w-md mx-auto p-6 border border-gray-300 shadow-md rounded-md m-12">
        </div>
     }

    <Footer/>
    </>
   
  );
};

export default Dashboard;
