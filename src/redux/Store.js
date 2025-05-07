import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Slices/CardSlice"


export const store = configureStore ({
    reducer: {
        cart: CartReducer,

    }
});