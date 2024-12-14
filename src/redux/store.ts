import { configureStore } from "@reduxjs/toolkit";
import { shoppingCartReducer } from "./features/shoppingCart/shoppingCartSlice";

const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
