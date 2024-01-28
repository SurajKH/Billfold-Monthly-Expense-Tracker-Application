// // MyComponent.js
// import React from 'react';
// import { useSelector } from 'react-redux';

// const ReduxContents = () => {

//   const financeState = useSelector((state) => state.finance);


//   return (
//     <div>
//       <h2>Redux State:</h2>
//       <pre>{JSON.stringify(financeState, null, 2)}</pre>
//     </div>
//   );
// };

// export default ReduxContents;

// MyComponent.js
// import React from 'react';
// import { useSelector } from 'react-redux';
// import { persistStore } from 'redux-persist';

/*
const ReduxContents = () => {
  // Use the useSelector hook to access the Redux state
  const financeState = useSelector((state) => state.finance);

  // If you are using Redux Persist, you can use the `persistStore` callback to get the latest persisted state
//   const persistedFinanceState = persistStore().getState().finance;

  // Now 'financeState' contains the current state of your 'financeSlice'
  // 'persistedFinanceState' contains the latest persisted state

  return (
    <div>
      <h2>Current Redux State:</h2>
      <pre>{JSON.stringify(financeState, null, 2)}</pre>

      <h2>Latest Persisted State:</h2>
      <pre>{JSON.stringify(persistedFinanceState, null, 2)}</pre> 
    </div>
  );
};

*/

// MyComponent.js
import React from 'react';
import { useSelector } from 'react-redux';
import { persistedFinanceSelector } from '../redux/selectors'; // Import the selector for the persisted finance state

const ReduxContents = () => {
  // Use the useSelector hook to access the persisted Redux state
    const persistedFinanceState = useSelector(persistedFinanceSelector);

    return (
        <div>
        <h2>Persisted Redux State:</h2>
        <pre>{JSON.stringify(persistedFinanceState, null, 2)}</pre>
        </div>
    );
};

export default ReduxContents;

