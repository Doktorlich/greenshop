import React, { useRef } from "react";
import PropTypes from "prop-types";
import styled from "./SortPopup.module.scss";
import ArrowLineLink from "../../07-shared/UI/Icon/Arrow/ArrowLineLink";

const SortPopup = ({ sortNameList, isVisible }) => {
    const popupRef = useRef();
    // useEffect(() => {
    //     const clickOutside = (event) => {
    //         if (!event.composedPath().includes(popupRef.current)) {
    //             setIsVisible(false);
    //         }
    //     };
    //     document.body.addEventListener("click", clickOutside);
    //     return () => {
    //         document.body.removeEventListener("click", clickOutside);
    //     };
    // }, []);
    return (
        <>
            {isVisible && (
                <div ref={popupRef} className={styled["sort-popup"]}>
                    <ul className={styled["sort-popup__list"]}>
                        {sortNameList.map((item, index) => {
                            return (
                                <li key={index} className={styled["sort-popup__item"]}>
                                    <p className={styled["sort-popup__text"]}>
                                        {item.title} ({item.sort})
                                    </p>
                                    <ArrowLineLink transform={item.sort !== "asc" ? "rotate(90)" : "rotate(-90)"} />
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
};

export default SortPopup;
