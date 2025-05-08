import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Slices/CardSlice"

const store = configureStore ({
    reducer: {
        cart: CartReducer,

    }
});

export default store;
