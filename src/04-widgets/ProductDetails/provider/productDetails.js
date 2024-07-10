import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    imageDetailsProductId: 0,
};

export const goodsSlice = createSlice({
    name: "productDetails",
    initialState,
    reducers: {
        setImageDetailsProductId(state, action) {
            state.imageDetailsProductId = action.payload;
        },
    },
});
export const { setImageDetailsProductId } = goodsSlice.actions;
export default goodsSlice.reducer;
