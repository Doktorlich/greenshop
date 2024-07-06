import { configureStore } from "@reduxjs/toolkit";
import sidebar from "../../04-widgets/Sidebar/provider/sidebarSlice";
import sorting from "../../04-widgets/Sorting/provider/sortingSlice";
import apiProduct from "../../07-shared/api/store/apiSlice";
import goods from "../../04-widgets/Goods/provider/goodsSlice";
export const store = configureStore({
    reducer: {
        sidebar,
        sorting,
        apiProduct,
        goods,
    },
});
