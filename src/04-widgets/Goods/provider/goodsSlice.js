import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    includeValue: false,
    valueId: "",
};

export const goodsSlice = createSlice({
    name: "goods",
    initialState,
    reducers: {
        setIncludeValue(state, action) {
            state.includeValue = action.payload;
        },
        setValueId(state, action) {
            state.valueId = action.payload;
        },
    },
});
export const { setIncludeValue, setValueId } = goodsSlice.actions;
export default goodsSlice.reducer;
