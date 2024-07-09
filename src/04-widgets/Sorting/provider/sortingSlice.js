import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    sortValueLeft: 0,
    isVisible: false,
};

const sortingSlice = createSlice({
    name: "sorting",
    initialState,
    reducers: {
        setSortValueLeft(state, action) {
            state.sortValueLeft = action.payload;
        },
        setIsVisible(state, action) {
            state.isVisible = action.payload;
        },
    },
});
export const { setSortValueLeft, setIsVisible } = sortingSlice.actions;
export default sortingSlice.reducer;
