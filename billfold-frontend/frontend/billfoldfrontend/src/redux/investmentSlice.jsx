import { createSlice } from '@reduxjs/toolkit';

const investmentSlice = createSlice({
  name: 'investment',
  initialState: {
    investedAmount: Array(12).fill(0),
    currentMonth: 'January',
    years: 0,
  },
  reducers: {
    setInvestedAmount: (state, action) => {
      const { month, amount } = action.payload;
      console.log('Month: ' , month, 'Amount: ', amount);
      state.investedAmount[month] = amount;
    },
    setCurrentMonth: (state, action) => {
      state.currentMonth = action.payload;
    },
    setYears: (state, action) => {
      state.years = action.payload;
    },
  },
});

export const { setInvestedAmount, setCurrentMonth, setYears } = investmentSlice.actions;

export default investmentSlice.reducer;


