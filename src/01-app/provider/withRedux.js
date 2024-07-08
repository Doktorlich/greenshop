import { configureStore } from "@reduxjs/toolkit";
import sidebar from "../../04-widgets/Sidebar/provider/sidebarSlice";
import sorting from "../../04-widgets/Sorting/provider/sortingSlice";
import apiProduct from "../../07-shared/api/store/apiSlice";
import goods from "../../04-widgets/Goods/provider/goodsSlice";
import pagination from "../../05-features/Pagination/provider/paginationSlice";
import carousel from "../../04-widgets/Slider/provider/sliderSlice";
export const store = configureStore({
    reducer: {
        sidebar,
        sorting,
        apiProduct,
        goods,
        pagination,
        carousel,
    },
});
