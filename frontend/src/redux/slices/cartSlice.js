// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   items: [], // ✅ Store cart items inside an object
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addItems: (state, action) => {
//       state.items.push(action.payload); // ✅ Modify items inside the object
//     },

//     removeItem: (state, action) => {
//       state.items = state.items.filter((item) => item.id !== action.payload);
//     },
//   },
// });

// export const { addItems, removeItem } = cartSlice.actions;
// export default cartSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = [];

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addItems: (state, action) => {
//       state.push(action.payload); // Return a new array instead of mutating
//     },

//     removeItem: (state, action) => {
//       return state.filter((item) => item.id != action.payload); // Strict comparison
//     },
//   },
// });

// export const { addItems, removeItem } = cartSlice.actions;
// export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // ✅ Store cart items in an object property
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const getTotalPrice = (state) =>
  state.cart.items.reduce((total, item) => total + item.price, 0);
export const { addItems, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
