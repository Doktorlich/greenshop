import React from "react";
import styled from "./Sorting.module.scss";
import { SORT_NAMES_LEFT } from "./data/data";
import Arrow from "../../07-shared/UI/Icon/Arrow/Arrow";
import { useDispatch, useSelector } from "react-redux";
import { setSortValueLeft } from "./features/sortingSlice";

const Sorting = () => {
    const { sortValueLeft } = useSelector((state) => state.sorting);
    const dispatch = useDispatch();
    console.log(sortValueLeft);
    // sorting__left-elem--active
    return (
        <div className={styled["sorting"]}>
            <ul className={styled["sorting__left-sort"]}>
                {SORT_NAMES_LEFT.map((name, index) => (
                    <li
                        key={index}
                        className={[`${styled["sorting__left-elem"]}`, `${+sortValueLeft == +index ? styled["sorting__left-elem--active"] : ""}`].join(" ")}
                        onClick={() => dispatch(setSortValueLeft(index))}
                    >
                        {name}
                    </li>
                ))}
            </ul>

            <div className={styled["sorting__right-sort"]}>
                <p className={styled["sorting__right-name"]}>Short by:</p>
                <p className={styled["sorting__right-popup"]}>Default sorting</p>
                <Arrow className={styled["sorting__arrow"]} />
            </div>
        </div>
    );
};

export default Sorting;
