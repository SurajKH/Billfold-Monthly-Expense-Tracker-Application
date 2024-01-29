// import React, { useState } from 'react';
// import Footer from './Footer';
// import Navbar from './Navbar';

// const months = [
//   'January', 'February', 'March', 'April', 'May', 'June',
//   'July', 'August', 'September', 'October', 'November', 'December'
// ];

// const Dashboard = () => {
//   const [submitStatus, setSubmitStatus] = useState(false);
//   const [totalExpenses, setTotalExpenses] = useState(0);
//   const [walletAmount, setWalletAmount] = useState(0);
//   const [selectedMonth, setSelectedMonth] = useState('January');

//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     // Calculate total expenses
//     const rent = parseFloat(e.target.rent.value) || 0;
//     const grocery = parseFloat(e.target.grocery.value) || 0;
//     const travel = parseFloat(e.target.travel.value) || 0;
//     const laundary = parseFloat(e.target.laundary.value) || 0;
//     const otherExpenses = parseFloat(e.target.otherExpenses.value) || 0;

//     const totalExpenses = rent + grocery + travel + laundary + otherExpenses;
//     setTotalExpenses(totalExpenses);

//     // Subtract total expenses from wallet amount
//     const walletAmount = parseFloat(e.target.walletAmount.value) || 0;
//     const savingAmount = walletAmount - totalExpenses;

//     // Set wallet amount, submit status, and selected month
//     setWalletAmount(walletAmount);
//     setSubmitStatus(true);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="max-w-md mx-auto p-6 border border-gray-500 shadow-md rounded-md m-12">
//         <h2 className="text-2xl font-bold mb-4">Monthly Expenses</h2>
//         <form onSubmit={handleFormSubmit}>
//           {/* Wallet Amount Field */}
//           <div className="mb-4">
//             <label htmlFor="walletAmount" className="block text-sm font-medium text-gray-600">
//               Monthly Wallet Amount:
//             </label>
//             <input
//               type="number"
//               id="walletAmount"
//               name="walletAmount"
//               className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
//               required
//             />
//           </div>

//           {/* Monthly Expenses Fields */}
//           <div className="grid grid-cols-2 gap-4">
//             <div className="mb-4">
//               <label htmlFor="rent" className="block text-sm font-medium text-gray-600">
//                 Rent
//               </label>
//               <input
//                 type="number"
//                 id="rent"
//                 name="rent"
//                 className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
//                 required
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="grocery" className="block text-sm font-medium text-gray-600">
//                 Grocery
//               </label>
//               <input
//                 type="number"
//                 id="grocery"
//                 name="grocery"
//                 className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
//                 required
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="travel" className="block text-sm font-medium text-gray-600">
//                 Travel
//               </label>
//               <input
//                 type="number"
//                 id="travel"
//                 name="travel"
//                 className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
//                 required
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="laundary" className="block text-sm font-medium text-gray-600">
//                 Laundary
//               </label>
//               <input
//                 type="number"
//                 id="laundary"
//                 name="laundary"
//                 className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
//                 required
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="otherExpenses" className="block text-sm font-medium text-gray-600">
//                 Other Expenses
//               </label>
//               <input
//                 type="number"
//                 id="otherExpenses"
//                 name="otherExpenses"
//                 className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
//                 required
//               />
//             </div>
//           </div>

//           {/* Select Month */}
//           <div className="mb-4">
//             <label htmlFor="selectedMonth" className="block text-sm font-medium text-gray-600">
//               Select Month:
//             </label>
//             <select
//               id="selectedMonth"
//               name="selectedMonth"
//               value={selectedMonth}
//               onChange={(e) => setSelectedMonth(e.target.value)}
//               className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
//             >
//               {months.map((month) => (
//                 <option key={month} value={month}>
//                   {month}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
//           >
//             Submit
//           </button>
//         </form>
//       </div>

//       {submitStatus && (
//         <div className="max-w-md mx-auto p-6 border border-gray-300 shadow-md rounded-md m-12">
//           <h2 className="text-2xl font-bold mb-4">Saving Amount</h2>
//           <div className="bg-green-200 p-4 rounded-md">
//             <p className="text-lg font-semibold">Your savings: {walletAmount - totalExpenses} INR</p>
//           </div>
//         </div>
//       )}

//       <Footer />
//     </>
//   );
// };

// export default Dashboard;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAmount, setCurrentMonth, setSavings } from '../redux/financeSlice';
import Footer from './Footer';
import Navbar from './Navbar';
import SavingsChart from './SavingsChart';
import monthlySavingsData from '../utils/SavingsHistory';
import ReduxContents from './ReduxContents';
import TokenValidity from './TokenValidity';
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const Dashboard = () => {

  // we are checking for the validity of the token.
  TokenValidity();

  const dispatch = useDispatch();
  const [submitStatus, setSubmitStatus] = useState(false);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [walletAmount, setWalletAmount] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState('January');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Calculate total expenses
    const rent = parseFloat(e.target.rent.value) || 0;
    const grocery = parseFloat(e.target.grocery.value) || 0;
    const travel = parseFloat(e.target.travel.value) || 0;
    const laundary = parseFloat(e.target.laundary.value) || 0;
    const otherExpenses = parseFloat(e.target.otherExpenses.value) || 0;

    const totalExpenses = rent + grocery + travel + laundary + otherExpenses;
    setTotalExpenses(totalExpenses);

    // Subtract total expenses from wallet amount
    const walletAmount = parseFloat(e.target.walletAmount.value) || 0;
    const savingAmount = walletAmount - totalExpenses;

    // Set wallet amount, submit status, selected month, and dispatch actions
    setWalletAmount(walletAmount);
    setSubmitStatus(true);
    setSelectedMonth(e.target.selectedMonth.value);

    dispatch(setAmount({ month: months.indexOf(selectedMonth), amount: totalExpenses }));
    dispatch(setCurrentMonth(selectedMonth));
    dispatch(setSavings(savingAmount));
  };

  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto p-6 border border-gray-500 shadow-md rounded-md m-12">
        <h2 className="text-2xl font-bold mb-4">Monthly Expenses</h2>
        <form onSubmit={handleFormSubmit}>
          {/* Wallet Amount Field */}
          <div className="mb-4">
            <label htmlFor="walletAmount" className="block text-sm font-medium text-gray-600">
              Monthly Wallet Amount:
            </label>
            <input
              type="number"
              id="walletAmount"
              name="walletAmount"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Monthly Expenses Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="rent" className="block text-sm font-medium text-gray-600">
                Rent
              </label>
              <input
                type="number"
                id="rent"
                name="rent"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="grocery" className="block text-sm font-medium text-gray-600">
                Grocery
              </label>
              <input
                type="number"
                id="grocery"
                name="grocery"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="laundary" className="block text-sm font-medium text-gray-600">
                Laundry
              </label>
              <input
                type="number"
                id="laundary"
                name="laundary"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="travel" className="block text-sm font-medium text-gray-600">
                Travel
              </label>
              <input
                type="number"
                id="travel"
                name="travel"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="otherExpenses" className="block text-sm font-medium text-gray-600">
                Other Expenses
              </label>
              <input
                type="number"
                id="otherExpenses"
                name="otherExpenses"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
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

      {submitStatus && (
        <div className="max-w-md mx-auto p-6 border border-gray-300 shadow-md rounded-md m-12">
          <h2 className="text-2xl font-bold mb-4">Saving Amount Summary</h2>
          <div className="bg-green-200 p-4 rounded-md">
            <p className="text-lg font-semibold">Wallet Money: {walletAmount}  <span>&#x20B9;</span></p>
            <p className="text-lg font-semibold">Total Expenses: {totalExpenses}  <span>&#x20B9;</span></p>
            <p className="text-lg font-semibold">Your savings: {walletAmount - totalExpenses}  <span>&#x20B9;</span></p>
            <p className="text-lg font-semibold">Current Month: {selectedMonth}</p>
          </div>
        </div>
      )}
    
       {/* <ReduxContents/> */}
       {/* <SavingsChart/> */}
       {/* Investment Plans. */}
       
      <Footer />
    </>
  );
};

export default Dashboard;

