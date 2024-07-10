import React, { useRef } from "react";
import PropTypes from "prop-types";
import styled from "./SortPopup.module.scss";
import ArrowLineLink from "../../07-shared/UI/Icon/Arrow/ArrowLineLink";
import { useDispatch } from "react-redux";

const SortPopup = ({ sortNameList, isVisible, setIsVisible, setSortValueName, sortValueRight, setSortValueRight }) => {
    const popupRef = useRef();
    const dispatch = useDispatch();
    const sortValueNameHandler = (event) => {
        dispatch(setSortValueName(event.target.innerText));
    };
    return (
        <>
            {isVisible && (
                <div
                    ref={popupRef}
                    className={styled["sort-popup"]}
                    onMouseLeave={() => {
                        dispatch(setIsVisible(false));
                    }}
                >
                    <ul className={styled["sort-popup__list"]}>
                        {sortNameList.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    className={[`${styled["sort-popup__item"]}`, `${+sortValueRight == +index ? styled["sort-popup__item--active"] : ""}`].join(" ")}
                                    onClick={(event) => {
                                        sortValueNameHandler(event);
                                        dispatch(setSortValueRight(index));
                                    }}
                                >
                                    <p className={styled["sort-popup__text"]}>
                                        {item.title} ({item.sort})
                                    </p>
                                    <ArrowLineLink transform={item.sort !== "asc" ? "rotate(90)" : "rotate(-90)"} className={styled["arrow"]} />
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </>
    );
};

SortPopup.propTypes = {
    sortNameList: PropTypes.array,
    isVisible: PropTypes.bool,
    setIsVisible: PropTypes.func,
    sortValueName: PropTypes.string,
    setSortValueName: PropTypes.func,
    sortValueRight: PropTypes.number,
    setSortValueRight: PropTypes.func,
};

export default SortPopup;
