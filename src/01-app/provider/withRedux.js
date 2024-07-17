import { configureStore } from "@reduxjs/toolkit";
import sidebar from "../../04-widgets/Sidebar/provider/sidebarSlice";
import sorting from "../../04-widgets/Sorting/provider/sortingSlice";
import apiProduct from "../../07-shared/api/store/apiSlice";
import goods from "../../04-widgets/Goods/provider/goodsSlice";
import pagination from "../../05-features/Pagination/provider/paginationSlice";
import carousel from "../../04-widgets/Slider/provider/sliderSlice";
import productView from "../../03-pages/ProductViev/provider/productViewSlice";
import productDetails from "../../04-widgets/ProductDetails/provider/productDetails";
import headerSlice from "../../04-widgets/Header/provider/headerSlice";
import authSlice from "../../05-features/AuthModal/provider/authSlice";

export const store = configureStore({
    reducer: {
        sidebar,
        sorting,
        apiProduct,
        goods,
        pagination,
        carousel,
        productView,
        productDetails,
        headerSlice,
        authSlice,
    },
});
