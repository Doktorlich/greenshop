import React from "react";
import { CATEGORIES_LIST } from "../../Data/data";
import styled from "./Categories.module.scss";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
const Categories = ({ valueId, setValueId }) => {
    const dispatch = useDispatch();
    return (
        <div className={styled["categories"]}>
            <h3 className={styled["categories__main-title"]}>Categories</h3>
            <ul className={`${styled["categories__list"]}`}>
                {CATEGORIES_LIST.map((title, index) => (
                    <li
                        key={index}
                        onClick={() => dispatch(setValueId(index))}
                        className={[`${styled["categories__list-item"]}`, valueId == index ? `${styled["categories__list-item--active"]}` : ""].join(" ")}
                    >
                        <p className={styled["categories__list-title"]}>{title}</p>
                        <p className={styled["categories__list-count"]}>(33)</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

Categories.propTypes = {
    valueId: PropTypes.number,
    setValueId: PropTypes.func,
};
export default Categories;
