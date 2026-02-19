import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice";
import OrderReducer from "./OrderSlice";
import FavoriteReducer from "./FavoriteSlice";

const Store = configureStore({
  reducer: {
    cart: CartReducer,
    order: OrderReducer,
    favorite: FavoriteReducer,
  },
});

export default Store;
