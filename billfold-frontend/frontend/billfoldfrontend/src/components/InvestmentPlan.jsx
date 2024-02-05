import React,{useState} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';

const InvestmentPlan = () => {

      const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];

    const [selectedMonth, setSelectedMonth] = useState('January');


    const handleFormSubmit = async (e) => {
       
        e.preventDefault();
        const investedAmount = parseFloat(e.target.investmentAmount.value) || 0;
        const month= parseFloat(e.target.selectedMonth.value) || 0;
        const years= parseFloat(e.target.years.value) || 0;
        
        const formData={
          "investmentAmount":investedAmount.toString(),
          "month":month.toString(),
          "years":years.toString()
      }

      const response=await axios.post("http://localhost:8081/api/v1/finance/fixed-deposits",formData);
        console.log(response.data);
      };
  return (
    <div>
    <Navbar/>
    <div className="max-w-md mx-auto p-6 border border-gray-500 shadow-md rounded-md m-12">
       <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label htmlFor="investmentAmount" className="block text-sm font-medium text-gray-600">
             Investing Amount: 
            </label>
            <input
              type="number"
              id="investmentAmount"
              name="investmentAmount"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
              <label htmlFor="selectedMonth" className="block text-sm font-medium text-gray-600">
                Select Month:
              </label>
              <select
                id="selectedMonth"
                name="selectedMonth"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
              >
                {months.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="years" className="block text-sm font-medium text-gray-600">
                Years 
              </label>
              <input
                type="number"
                id="years"
                name="years"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                required
              />
              </div>
              </div>
              <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit
          </button>
        </form>
    </div>
    <Footer/>
    </div>
  )
}

export default InvestmentPlan;
