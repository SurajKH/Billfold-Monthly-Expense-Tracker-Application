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
import React,{useState,useEffect} from 'react';

const ReduxContents = () => {
    const [persistedState, setPersistedState] = useState(null);

  useEffect(() => {
    // Fetch the persisted state from storage
    const persistedStateString = localStorage.getItem('persist:root');

    // Parse and set the state
    try {
      const parsedState = JSON.parse(persistedStateString);
      setPersistedState(parsedState);
    } catch (error) {
      console.error('Error parsing persisted state:', error);
    }
  }, []);

  return (
    <div>
      {/* <h2>Persisted State Details</h2>
      {persistedState ? (
        <pre>{JSON.stringify(persistedState, null, 2)}</pre>
      ) : (
        <p>No persisted state found.</p>
      )} */}
    </div>
  );
};

export default ReduxContents;

