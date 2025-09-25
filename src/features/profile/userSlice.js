import { storage } from "@/lib/storage";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: storage.getEmail() || "",
    token: storage.getToken() || "",
    user: storage.getUser() || {},
};

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        signupUsers(state, action) {
            state.email = action.payload;
        },
        verifyOtpUsers(state, action) {
            const {user, token} = action.payload;

            state.user = user
            state.token = token
        },
        signinUsers(state, action) {
            const {user, token} = action.payload;

            state.user = user
            state.token = token
        },
        signoutUsers(state) {
            state.user = {}
            state.token = ""
        }
    }
})

export const {signupUsers, signinUsers, verifyOtpUsers, signoutUsers} = userSlice.actions;
export default userSlice.reducer;