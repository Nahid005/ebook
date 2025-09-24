import { storage } from "@/lib/storage";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: "",
    user: {},
}

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        checkUser(state, action) {

        },
        signUp() {
            
        },
        veryfyOtp(state, action) {
            const {user, token} = action.payload;

            state.user = storage.setUser(user)
            state.token = storage.setToken(token);
        },
        signIn(state, action) {
            const {user, token} = action.payload;

            state.user = storage.setUser(user)
            state.token = storage.setToken(token);
        },
        signOut(state) {
            state.user = {}
            state.token = ""
        }
    }
})

export const {checkUser, signIn, veryfyOtp, signOut} = userSlice.actions;
export default userSlice.reducer;