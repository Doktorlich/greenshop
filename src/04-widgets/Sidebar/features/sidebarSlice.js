import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    rangeScaleFirst: 0,
    rangeScaleSecond: 500,
    valueId: null,
    valueSize: null,
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
        setValueId(state, action) {
            state.valueId = action.payload;
        },
        setValueSize(state, action) {
            state.valueSize = action.payload;
        },
    },
});

export const { setRangeScaleFirst, setRangeScaleSecond, setValueId, setValueSize } = sidebarSlice.actions;
export default sidebarSlice.reducer;
