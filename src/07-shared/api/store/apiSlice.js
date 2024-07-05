import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    productData: [],
    status: "loading",
};

export const fetchProductData = createAsyncThunk("product/requestStatus", async () => {
    const { data } = await axios.get("https://66877d2a0bc7155dc017dc35.mockapi.io/goods/goods");
    console.log(data);
    return data;
});

const apiSlice = createSlice({
    name: "apiProduct",
    initialState,
    reducers: {
        setProductData(state, action) {
            state.productData = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProductData.pending, (state) => {
            state.productData = [];
            state.status = "loading";
            console.log("loading");
        });
        builder.addCase(fetchProductData.fulfilled, (state, action) => {
            state.productData = action.payload;
            state.status = "succeeded";
            console.log("succeeded");
        });
        builder.addCase(fetchProductData.rejected, (state) => {
            state.productData = [];
            state.status = "failed";
            console.log("get data error");
        });
    },
});

export const { setGoods, setProductData } = apiSlice.actions;
export default apiSlice.reducer;
