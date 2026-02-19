import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice";     // make sure this file exists
import OrderReducer from "./OrderSlice";   // your OrderSlice.jsx

const Store = configureStore({
  reducer: {
    cart: CartReducer,
    order: OrderReducer,
  },
});

export default Store;
