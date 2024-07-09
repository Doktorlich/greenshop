import React, { useEffect } from "react";
import { CATEGORIES_LIST } from "../../Data/data";
import styled from "./Categories.module.scss";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { elementCountingCategory, elementCountingCategory2 } from "../../../../05-features/elementСounting/elementСounting";
const Categories = ({ valueId, setValueId, productData }) => {
    const dispatch = useDispatch();
    const { status } = useSelector((state) => state.apiProduct);
    const list = elementCountingCategory2(CATEGORIES_LIST, productData);

    if (status !== "succeeded") {
        return;
    }
    return (
        <div className={styled["categories"]}>
            <h3 className={styled["categories__main-title"]}>Categories</h3>
            <ul className={`${styled["categories__list"]}`}>
                {list.map(({ title, amount }, index) => (
                    <li
                        key={index}
                        onClick={() => dispatch(setValueId(index))}
                        className={[`${styled["categories__list-item"]}`, valueId == index ? `${styled["categories__list-item--active"]}` : ""].join(" ")}
                    >
                        <p className={styled["categories__list-title"]}>{title}</p>
                        <p className={styled["categories__list-count"]}>({amount})</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

Categories.propTypes = {
    valueId: PropTypes.number,
    setValueId: PropTypes.func,
    productData: PropTypes.array,
};
export default Categories;
