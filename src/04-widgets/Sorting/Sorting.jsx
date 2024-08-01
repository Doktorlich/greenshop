import React from "react";
import styled from "./Sorting.module.scss";
import { SORT_NAMES_LEFT, SORT_NAMES_POPUP } from "./data/data";
import Arrow from "../../07-shared/UI/Icon/Arrow/Arrow";
import { useDispatch, useSelector } from "react-redux";
import { setIsVisible, setSortValueLeft, setSortValueName, setSortValueRight } from "./provider/sortingSlice";
import SortPopup from "../../06-entities/SortPopup/SortPopup";
import Skeleton from "../../07-shared/UI/Skeleton/Skeleton.jsx";

const Sorting = () => {
    const { status } = useSelector((state) => state.apiProduct);
    const { sortValueLeft, sortValueRight, isVisible, sortValueName } = useSelector((state) => state.sorting);

    const dispatch = useDispatch();

    return (
        <div className={styled["sorting"]}>

            {status !== "succeeded" ? <Skeleton>
                <div className={styled["sorting__skeleton"]}>
                </div>
            </Skeleton> : <>
                <ul className={styled["sorting__left-sort"]}>
                    {SORT_NAMES_LEFT.map((name, index) => (
                        <li
                            key={index}
                            className={[`${styled["sorting__left-elem"]}`, `${+sortValueLeft === +index ? styled["sorting__left-elem--active"] : ""}`].join(" ")}
                            onClick={() => dispatch(setSortValueLeft(index))}
                        >
                            {name}
                        </li>
                    ))}
                </ul>

                <div className={styled["sorting__right-sort"]} onClick={() => dispatch(setIsVisible(!isVisible))}>
                    <p className={styled["sorting__right-name"]}>Short by:</p>
                    <p className={styled["sorting__right-popup"]}>{sortValueName}</p>
                    <Arrow className={styled["sorting__arrow"]} />
                    <SortPopup
                        sortNameList={SORT_NAMES_POPUP}
                        isVisible={isVisible}
                        setIsVisible={setIsVisible}
                        sortValueName={sortValueName}
                        setSortValueName={setSortValueName}
                        sortValueRight={sortValueRight}
                        setSortValueRight={setSortValueRight}
                    />
                </div>
            </>}

        </div>
    );
};

export default Sorting;
