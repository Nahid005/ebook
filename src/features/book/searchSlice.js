const { createSlice } = require("@reduxjs/toolkit");

const searchSlice = createSlice({
    name: "search",
    initialState: {
        query: ""
    },
    reducers: {
        getSearch(state, action) {
            state.query = action.payload
        }
    }
})


export const { getSearch } = searchSlice.actions;
export default searchSlice.reducer