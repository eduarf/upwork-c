import { configureStore } from "@reduxjs/toolkit";
import hamburgerReducer from './src/features/hamburger/hamburgerSlice';
import searchReducer from './src/features/search/searchSlice';
import rebrandITemsReducer from './src/features/rebrandItems/rebrandSlice';

export const store = configureStore({
    reducer: {
        hamburger: hamburgerReducer,
        search: searchReducer,
        rebrandItems: rebrandITemsReducer,
    },
});