export function fixedDeposit(amount)
{
    // now we need to consider a buffer range of returns over here.

    // lets give a ratio planner in UI and based on that lets consider the amount over here.

    //lets consider the amount to be managed using state management redux.

    var minDeposit=2.50,maxDeposit=9.00;

    var fixedDepositMinAmount=minDeposit*amount;
    console.log(fixedDepositMinAmount);

    var fixedDepositMaxAmount=maxDeposit*amount;
    console.log(fixedDepositMaxAmount);
    return {fixedDepositMinAmount,fixedDepositMaxAmount};

};

// Fixed Deposit:

// Investment Plan: Fixed Deposit with a bank
// Returns: Typically, the interest rates for fixed deposits vary, but let's assume an annual interest rate of 4.5%.
// Example: If you invest $10,000 in a fixed deposit with a 4.5% annual interest rate, after one year, you would earn $450 in interest, resulting in a total of $10,450.
// Stock Market Investment:

// Investment Plan: Investing in a diversified portfolio of stocks
// Returns: Stock market returns are variable and depend on market conditions. Let's assume an average annual return of 8%.
// Example: If you invest $20,000 in a diversified stock portfolio with an average annual return of 8%, after one year, your investment would grow to $21,600.
// Real Estate Investment:

// Investment Plan: Purchasing a rental property
// Returns: Returns from rental income and property value appreciation. Let's assume an annual rental income of $1,200 and a property value appreciation of 5%.
// Example: If you invest $100,000 in a rental property, you could earn $1,200 in monthly rental income ($14,400 annually) and experience a property value appreciation of $5,000 after one year.