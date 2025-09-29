import { storage } from "@/lib/storage";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: storage.getCartItems() || [] 
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addCartItem(state, action) {
            state.cartItems.push(action.payload);
            storage.setCartItems(state.cartItems)
        },
        deleteCartItem(state, action) {
            const remainingItems = state.cartItems.filter((item) => item.id !== action.payload);
            state.cartItems = remainingItems;
            storage.setCartItems(state.cartItems)
        },
        clearCartItems(state, action) {
            state.cartItems = [];
            storage.setCartItems(state.cartItems)
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