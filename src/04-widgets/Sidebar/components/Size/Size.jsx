import React from "react";
import { SIZE_LIST } from "../../Data/data";
import styled from "./Size.module.scss";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
const Size = ({ valueSize, setValueSize }) => {
    const dispatch = useDispatch();
    console.log(valueSize);
    return (
        <div className={styled["categories"]}>
            <h3 className={styled["categories__main-title"]}>Size</h3>
            <ul className={`${styled["categories__list"]}`}>
                {SIZE_LIST.map((title, index) => (
                    <li
                        key={index}
                        onClick={() => dispatch(setValueSize(index))}
                        className={[`${styled["categories__list-item"]}`, valueSize == index ? `${styled["categories__list-item--active"]}` : ""].join(" ")}
                    >
                        <p className={styled["categories__list-title"]}>{title}</p>
                        <p className={styled["categories__list-count"]}>(33)</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

Size.propTypes = {
    valueSize: PropTypes.number,
    setValueSize: PropTypes.func,
};
export default Size;
