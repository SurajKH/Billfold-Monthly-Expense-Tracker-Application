//import { configureStore } from '@reduxjs/toolkit';
//import financeReducer from './financeSlice';

// const store = configureStore({
//     reducer: {
//         finance: financeReducer,
//     },
// });

// export default store;

import {configureStore,getDefaultMiddleware} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'
import {combineReducers} from "redux"; 
import { persistReducer } from 'redux-persist';
import financeReducer from './financeSlice';
import investmentReducer from './investmentSlice';

const reducers = combineReducers({
    finance: financeReducer,
    investment:investmentReducer      
});

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    // whitelist:['finance']
};

const persistedReducer = persistReducer(persistConfig, reducers);


const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export default store;
// import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import financeSlice from './financeSlice';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, {
//   finance: financeSlice,
// });

// const store = configureStore({
//   reducer: persistedReducer,
// });

// export const persistor = persistStore(store);

// export default store;
