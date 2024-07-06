import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    pagCurrent: 1,
    dataPerPage: [],
};

const paginationSlice = createSlice({
    name: "pagination",
    initialState,
    reducers: {
        setPagCurrent(state, action) {
            state.pagCurrent = action.payload;
        },
        setDataPerPage(state, action) {
            state.dataPerPage = action.payload;
        },
    },
});
export const { setPagCurrent, setDataPerPage } = paginationSlice.actions;
export default paginationSlice.reducer;
