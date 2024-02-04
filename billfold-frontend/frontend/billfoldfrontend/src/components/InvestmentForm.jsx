import React, { useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { setInvestedAmount, setCurrentMonth, setYears } from '../redux/investmentSlice';
import ReduxContents from './ReduxContents';
// const months = [
//     'January', 'February', 'March', 'April', 'May', 'June',
//     'July', 'August', 'September', 'October', 'November', 'December'
//   ];
  
//   const FixedDepositForm = () => {
//     const dispatch = useDispatch();
//     // const { currentMonth, monthlyAmounts, savings } = useSelector((state) => state.investmentForm);
  
//     const handleSubmit = (e) => {
//       e.preventDefault();

//       const investmentAmount = e.target.elements.investmentAmount.value;
//       const month = e.target.elements.selectedMonth.value;
//       const years = e.target.elements.years.value;
//       console.log("Investment Amount: ", investmentAmount,' ',month,' ',years);
     
//     };
  
//     return (
//         <div className="max-w-md mx-auto p-6 border border-gray-500 shadow-md rounded-md m-12">
//         <form onSubmit={(e) => {
//           e.preventDefault();
//           onSubmit(e);
//           const investmentAmount = e.target.elements.investmentAmount.value;
//           const month = e.target.elements.selectedMonth.value;
//           const years = e.target.elements.years.value;
//           console.log("Investment Amount: ", investmentAmount,' ',month,' ',years);
    
    
//         }}
//         className="mt-4">
    
//         <div className="mb-4">
    
//           <label htmlFor="investmentAmount" className="block text-sm font-medium text-gray-600">
//             Investment Amount
//           </label>
//           <input
//             type="number"
//             id="investmentAmount"
//             name="investmentAmount"
//             className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
//             required
//           />
//         </div>
    
//         <div className="grid grid-cols-2 gap-4">
//           {/* <div className="mb-4">
//             <label htmlFor="month" className="block text-sm font-medium text-gray-600">
//               Month
//             </label>
//             <input
//               type="number"
//               id="month"
//               name="month"
//               className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
//               required
//             />
//           </div> */}
    
//            <div className="mb-4">
//                   <label htmlFor="selectedMonth" className="block text-sm font-medium text-gray-600">
//                     Select Month:
//                   </label>
//                   <select
//                     id="selectedMonth"
//                     name="selectedMonth"
//                     // value={selectedMonth}
//                     // onChange={(e) => setSelectedMonth(e.target.value)}
//                     className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
//                   >
//                 <option value="" disabled>Select Month</option>
//                 <option value="January">January</option>
//                 <option value="February">February</option>
//                 <option value="March">March</option>
//                 <option value="April">April</option>
//                 <option value="May">May</option>
//                 <option value="June">June</option>
//                 <option value="July">July</option>
//                 <option value="August">August</option>
//                 <option value="September">September</option>
//                 <option value="October">October</option>
//                 <option value="November">November</option>
//                 <option value="December">December</option>
//                   </select> 
//                 </div>
    
//           <div className="mb-4">
//             <label htmlFor="years" className="block text-sm font-medium text-gray-600">
//               Years
//             </label>
//             <input
//               type="number"
//               id="years"
//               name="years"
//               className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
//               required
//             />
//           </div>
//           </div>
    
    
//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
//         >
//           Submit
//         </button>
//     </form>
//     </div>
//     );
//   };

// const FixedDepositForm = ({ onSubmit }) => (

//     <div className="max-w-md mx-auto p-6 border border-gray-500 shadow-md rounded-md m-12">
//     <form onSubmit={(e) => {
//       e.preventDefault();
//       onSubmit(e);
//       const investmentAmount = e.target.elements.investmentAmount.value;
//       const month = e.target.elements.selectedMonth.value;
//       const years = e.target.elements.years.value;
//       console.log("Investment Amount: ", investmentAmount,' ',month,' ',years);
//     }}
//     className="mt-4">

//     <div className="mb-4">

//       <label htmlFor="investmentAmount" className="block text-sm font-medium text-gray-600">
//         Investment Amount
//       </label>
//       <input
//         type="number"
//         id="investmentAmount"
//         name="investmentAmount"
//         className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
//         required
//       />
//     </div>

//     <div className="grid grid-cols-2 gap-4">
//       {/* <div className="mb-4">
//         <label htmlFor="month" className="block text-sm font-medium text-gray-600">
//           Month
//         </label>
//         <input
//           type="number"
//           id="month"
//           name="month"
//           className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
//           required
//         />
//       </div> */}

//        <div className="mb-4">
//               <label htmlFor="selectedMonth" className="block text-sm font-medium text-gray-600">
//                 Select Month:
//               </label>
//               <select
//                 id="selectedMonth"
//                 name="selectedMonth"
//                 // value={selectedMonth}
//                 // onChange={(e) => setSelectedMonth(e.target.value)}
//                 className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
//               >
//             <option value="" disabled>Select Month</option>
//             <option value="January">January</option>
//             <option value="February">February</option>
//             <option value="March">March</option>
//             <option value="April">April</option>
//             <option value="May">May</option>
//             <option value="June">June</option>
//             <option value="July">July</option>
//             <option value="August">August</option>
//             <option value="September">September</option>
//             <option value="October">October</option>
//             <option value="November">November</option>
//             <option value="December">December</option>
//               </select> 
//             </div>

//       <div className="mb-4">
//         <label htmlFor="years" className="block text-sm font-medium text-gray-600">
//           Years
//         </label>
//         <input
//           type="number"
//           id="years"
//           name="years"
//           className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
//           required
//         />
//       </div>
//       </div>


//     {/* Submit Button */}
//     <button
//       type="submit"
//       className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
//     >
//       Submit
//     </button>
// </form>
// </div>
// );

const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

const FixedDepositForm = ({ onSubmit }) => {

    const [selectedMonth, setSelectedMonth] = useState('January');
    const dispatch = useDispatch();
    // const { investmentAmount, selectedMonth, years } = useSelector((state) => state.investmentForm);

   
    const investmentFormState = useSelector((state) => state.investmentForm);

    const handleSubmit = (e) => {
      e.preventDefault();
      
      const updatedInvestmentAmount = e.target.elements.investmentAmount.value;
      const updatedSelectedMonth = e.target.elements.selectedMonth.value;
      console.log("Updated Month: ",updatedSelectedMonth, " Updated Investment Amount: ",updatedInvestmentAmount);
      const updatedYears = e.target.elements.years.value;

    //   setSelectedMonth(updatedSelectedMonth);

      dispatch(setInvestedAmount({ month: months.indexOf(selectedMonth), amount: updatedInvestmentAmount }));
      dispatch(setCurrentMonth(updatedSelectedMonth));
      dispatch(setYears(updatedYears));

  
      console.log("Investment Amount: ", updatedInvestmentAmount);
      console.log("Selected Month: ", updatedSelectedMonth);
      console.log("Years: ", updatedYears);


  
      // Pass the Redux dispatch function to the original onSubmit prop
    //   onSubmit(e, dispatch);

       console.log("Redux State after form submission:", investmentFormState);

    };
  
    return (
      <div className="max-w-md mx-auto p-6 border border-gray-500 shadow-md rounded-md m-12">
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label htmlFor="investmentAmount" className="block text-sm font-medium text-gray-600">
              Investment Amount
            </label>
            <input
              type="number"
              id="investmentAmount"
              name="investmentAmount"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
  
          {/* <div className="mb-4">
            <label htmlFor="selectedMonth" className="block text-sm font-medium text-gray-600">
              Select Month:
            </label>
            <select
              id="selectedMonth"
              name="selectedMonth"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            >
              <option value="" disabled>Select Month</option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
          </div> */}
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
  
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit
          </button>
        </form>
        <ReduxContents/>
      </div>
    );
  };

const MutualFundsForm = ({ onSubmit }) => (
    <form onSubmit={onSubmit}>
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
            {/* <div className="mb-4">
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
            </div> */}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit
          </button>
  </form>
);

const formComponents = {
  fixedDeposit: FixedDepositForm,
  mutualFunds: MutualFundsForm,
};

const InvestmentForm = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(e);
  };

  const SelectedForm = formComponents[selectedCategory];

  return (
    <div className="text-center mt-8">
      <h1 className="text-2xl font-bold mb-4">Select the Category</h1>

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="p-2 border border-gray-300 rounded-md"
      >
        <option value="">Select Category</option>
        <option value="fixedDeposit">Fixed Deposit</option>
        <option value="mutualFunds">Mutual Funds</option>
      </select>

      {SelectedForm && <SelectedForm onSubmit={selectedCategory === 'fixedDeposit' ? handleFormSubmit : undefined} />}
    </div>
  );
};

export default InvestmentForm;
