import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import styled from "./Pagination.module.scss";
import { setDataPerPage, setPagCurrent } from "./provider/paginationSlice";
import ArrowPagination from "../../07-shared/UI/Icon/Arrow/ArrowPagination";
const Pagination = ({ amountProducts, productData }) => {
    const { pagCurrent } = useSelector((state) => state.pagination);
    const dispatch = useDispatch();

    const amountPages = Math.ceil(productData.length / amountProducts);
    const startIndex = (pagCurrent - 1) * amountProducts;
    const endIndex = startIndex + amountProducts;

    const elementPagRef = useRef(null);
    const amountElemPag = document.querySelectorAll("#count-pag").length;

    const movingLeft = function () {
        dispatch(setPagCurrent(+pagCurrent === 1 ? pagCurrent : +pagCurrent - 1));
        scroll(0, 0);
    };

    const movingRight = function () {
        dispatch(setPagCurrent(+pagCurrent === amountElemPag ? pagCurrent : +pagCurrent + 1));
        scroll(0, 0);
    };
    useEffect(() => {
        dispatch(setDataPerPage(productData.slice(startIndex, endIndex)));
        return () => {};
    }, [startIndex, endIndex, amountPages]);
    return (
        <>
            <div onClick={movingLeft} className={pagCurrent > 1 ? styled["pagination__arrow-left"] : [styled["pagination__arrow-left"], styled["arrow-hide"]].join(" ")}>
                <ArrowPagination transform={"rotate(180)"} />
            </div>

            <ul className={styled["pagination__list"]}>
                {Array.from({ length: amountPages }, (_, index) => index + 1).map((page) => {
                    return (
                        <li
                            key={page}
                            ref={elementPagRef}
                            id="count-pag"
                            onClick={() => {
                                dispatch(setPagCurrent(page));
                                scroll(0, 0);
                            }}
                            className={[+pagCurrent === +page ? `${styled["pagination__item--active"]}` : `${styled["pagination__item"]}`, `${styled["count-pag"]}`].join(" ")}
                        >
                            {page}
                        </li>
                    );
                })}
            </ul>

            <div onClick={movingRight} className={+pagCurrent < +amountElemPag ? styled["pagination__arrow-right"] : [styled["pagination__arrow-right"], styled["arrow-hide"]].join(" ")}>
                <ArrowPagination />
            </div>
        </>
    );
};

Pagination.propTypes = {
    amountProducts: PropTypes.number,
    productData: PropTypes.array,
};

export default Pagination;
