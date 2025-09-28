import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addCartItem(state, action) {
            state.cartItems.push(action.payload);
        },
        deleteCartItem(state, action) {
            const remainingItems = state.cartItems.filter((item) => item.id !== action.payload);
            state.cartItems = remainingItems;
        },
        clearCartItems(state, action) {
            state.cartItems = [];
        }
    }
})

export const {addCartItem, deleteCartItem, clearCartItems} = cartSlice.actions;
export default cartSlice.reducer;

export function totalPrice(state) {
    return state?.cart?.cartItems.reduce((acc, curr) => {
        acc += curr.totalPrice
        return acc
    }, 0)
}