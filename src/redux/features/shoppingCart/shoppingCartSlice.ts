import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TItem } from "../../../types";
import { RootState } from "../../store";

interface IShoppingCart {
  items: Array<TItem>;
}

const initialState: IShoppingCart = {
  items: [],
};

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<TItem>) => {
      const cartId = new Date().getTime().toString();
      state.items.push({ ...action.payload, cartId });
    },
    removeItem: (state, action: PayloadAction<TItem>) => {
      state.items = state.items.filter(
        (item) => item.cartId !== action.payload.cartId
      );
    },
  },
});

export const { addItem, removeItem } = shoppingCartSlice.actions;

export const shoppingCartReducer = shoppingCartSlice.reducer;

export const shoppingCartSelect = (state: RootState) => state.shoppingCart;
