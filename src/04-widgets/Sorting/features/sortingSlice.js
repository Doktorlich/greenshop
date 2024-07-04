import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    sortValueLeft: 0,
};

const sortingSlice = createSlice({
    name: "sorting",
    initialState,
    reducers: {
        setSortValueLeft(state, action) {
            state.sortValueLeft = action.payload;
        },
    },
});
export const { setSortValueLeft } = sortingSlice.actions;
export default sortingSlice.reducer;
