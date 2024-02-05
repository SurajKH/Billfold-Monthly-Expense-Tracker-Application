import React, { useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { setInvestedAmount, setCurrentMonth, setYears } from '../redux/investmentSlice';
import ReduxContents from './ReduxContents';
import axios from 'axios';

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

    const [responseCardData, setResponseCardData] = useState(null);
    const [selectedMonth, setSelectedMonth] = useState('January');
    const dispatch = useDispatch();
    // const { investmentAmount, selectedMonth, years } = useSelector((state) => state.investmentForm);

   
    // const investmentFormState = useSelector((state) => state.investmentForm);

    const handleSubmit = async(e) => {
      e.preventDefault();
      
      const updatedInvestmentAmount = e.target.elements.investmentAmount.value;
      const updatedSelectedMonth = e.target.elements.selectedMonth.value;
      console.log("Updated Month: ",updatedSelectedMonth, " Updated Investment Amount: ",updatedInvestmentAmount);
      const updatedYears = e.target.elements.years.value;


      dispatch(setInvestedAmount({ month: months.indexOf(selectedMonth), amount: updatedInvestmentAmount }));
      dispatch(setCurrentMonth(updatedSelectedMonth));
      dispatch(setYears(updatedYears));

      try {

        const response = await axios.post('http://localhost:8081/api/v1/finance/fixed-deposits', {
          investmentAmount: updatedInvestmentAmount,
          month: updatedSelectedMonth,
          years: updatedYears,
        });

      const cardData = ['minCap', 'midCap', 'maxCap'].reduce((acc, cap) => {
        acc[cap] = {
          amount: response.data[`${cap}Amount`],
          profit: response.data[`${cap}Profit`],
          month: updatedSelectedMonth,
          years: updatedYears,
        };
        return acc;
      }, {});

      // Set the card data to state
      setResponseCardData(cardData);
      } catch (error) {
        // Handle errors
        console.error('API Error:', error);
      }

    };
  
    return (
      <>
      <div className="max-w-md mx-auto p-6 border border-gray-500 shadow-md rounded-md bg-teal-50">
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
      </div>
      {responseCardData && (
        <div className='mt-12 '>
      {responseCardData && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {['minCap', 'midCap', 'maxCap'].map((cap) => (
            <div key={cap} className="p-4 border-2 border-black rounded-md shadow-md bg-teal-100">
              <h2 className="text-lg font-semibold">{cap.charAt(0).toUpperCase() + cap.slice(1)+"ital"} Investment Plan </h2>
              <div className='mt-2'>
              <p className="text-base font-normal">Amount: {responseCardData[cap].amount}</p>
                <p className="text-base font-normal">Profit Earned: {responseCardData[cap].profit}</p>
                <p className="text-base font-normal">Month: {responseCardData[cap].month}</p>
                <p className="text-base font-normal">Years: {responseCardData[cap].years}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
      )}
      
      </>
    );
  };

  const MutualFundsForm = ({ onSubmit }) => {

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
      </div>
    );
  };  

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
