import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    productData: [],
    status: "loading",
};
const type = "product/axiosByDataStatus";
// parametrs
const callback = async () => {
    const url = "https://greenshop-f7505-default-rtdb.europe-west1.firebasedatabase.app/";
    const response = await axios.get(url);
    return response.data;
};
const options = {};

export const axiosProductData = createAsyncThunk(type, callback, options);

const apiSlice = createSlice({
    name: "apiProduct",
    initialState,
    reducers: {
        setProductData(state, action) {
            state.productData = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(axiosProductData.pending, (state) => {
            state.productData = [];
            state.status = "loading";
        });
        builder.addCase(axiosProductData.fulfilled, (state, action) => {
            state.productData = action.payload;
            state.status = "succeeded";
        });
        builder.addCase(axiosProductData.rejected, (state) => {
            state.productData = [];
            state.status = "failed";
        });
    },
});

export const { setGoods } = apiSlice.actions;
export default apiSlice.reducer;
