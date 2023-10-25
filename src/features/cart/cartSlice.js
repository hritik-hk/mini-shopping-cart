import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
    totalQuantity: 0,
    isOpen: false,
  },

  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
      state.total += action.payload.price;
    },

    increment: (state, action) => {
      const idx = state.items.findIndex((item) => item.id === action.payload);
      state.items[idx].quantity++;
      state.total += state.items[idx].price;
    },

    decrement: (state, action) => {
      const idx = state.items.findIndex((item) => item.id === action.payload);
      if (state.items[idx].quantity == 1) {
        state.total -= state.items[idx].price;
        state.items = state.items.filter((item) => item.id !== action.payload);
      } else {
        state.total -= state.items[idx].price;
        state.items[idx].quantity--;
      }
    },

    removeFromCart: (state, action) => {
      const idx = state.items.findIndex((item) => item.id === action.payload);
      state.total -= state.items[idx].price * state.items[idx].quantity;
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    getCartTotal: (state) => {
      const { totalAmount, totalQuantity } = state.items.reduce(
        (cartTotal, item) => {
          const { price, quantity } = item;
          const itemTotal = price * quantity;
          cartTotal.totalAmount += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalAmount: 0,
          totalQuantity: 0,
        }
      );

      state.totalAmount = parseFloat(totalAmount.toFixed(2));
      state.totalQuantity = totalQuantity;
    },

    toggleOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  increment,
  decrement,
  removeFromCart,
  getCartTotal,
  toggleOpen,
} = cartSlice.actions;

export default cartSlice.reducer;
