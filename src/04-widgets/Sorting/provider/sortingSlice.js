import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    sortValueLeft: 0,
    sortValueRight: 0,
    isVisible: false,
    sortValueName: "Name (asc)",
};

const sortingSlice = createSlice({
    name: "sorting",
    initialState,
    reducers: {
        setSortValueLeft(state, action) {
            state.sortValueLeft = action.payload;
        },
        setSortValueRight(state, action) {
            state.sortValueRight = action.payload;
        },
        setIsVisible(state, action) {
            state.isVisible = action.payload;
        },
        setSortValueName(state, action) {
            state.sortValueName = action.payload;
        },
    },
});
export const { setSortValueLeft, setSortValueRight, setIsVisible, setSortValueName } = sortingSlice.actions;
export default sortingSlice.reducer;
