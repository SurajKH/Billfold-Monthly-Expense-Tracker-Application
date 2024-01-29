import React from 'react'

const InvestmentPlan = () => {
    const handleFormSubmit = (e) => {
       
        e.preventDefault();
    
        //need to consider a post to the endpoints.
        
      };
  return (
    <div>
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
  )
}

export default InvestmentPlan;
