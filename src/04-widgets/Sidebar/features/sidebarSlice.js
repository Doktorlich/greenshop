import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    rangeScaleFirst: 0,
    rangeScaleSecond: 500,
};

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        setRangeScaleFirst(state, action) {
            state.rangeScaleFirst = action.payload;
        },
        setRangeScaleSecond(state, action) {
            state.rangeScaleSecond = action.payload;
        },
    },
});

export const { setRangeScaleFirst, setRangeScaleSecond } = sidebarSlice.actions;
export default sidebarSlice.reducer;
