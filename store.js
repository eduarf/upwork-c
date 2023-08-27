import { configureStore } from "@reduxjs/toolkit";
import hamburgerReducer from './src/features/hamburger/hamburgerSlice';
import searchReducer from './src/features/search/searchSlice';

export const store = configureStore({
    reducer: {
        hamburger: hamburgerReducer,
        search: searchReducer,
    },
});