import { configureStore } from "@reduxjs/toolkit";
import hamburgerReducer from './src/features/hamburger/hamburgerSlice';

export const store = configureStore({
    reducer: {
        hamburger: hamburgerReducer,
    },
});