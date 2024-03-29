// financeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const financeSlice = createSlice({
  name: 'finance',
  initialState: {
    monthlyAmounts: Array(12).fill(0),
    currentMonth: 'January',
    savings: 0,
  },
  reducers: {
    setAmount: (state, action) => {
      const { month, amount } = action.payload;
      state.monthlyAmounts[month] = amount;
    },
    setCurrentMonth: (state, action) => {
      state.currentMonth = action.payload;
    },
    setSavings: (state, action) => {
      state.savings = action.payload;
    },
  },
});

export const { setAmount, setCurrentMonth, setSavings } = financeSlice.actions;


export default financeSlice.reducer;
