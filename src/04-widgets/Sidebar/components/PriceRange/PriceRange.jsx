import React, { useEffect, useRef } from "react";
import styled from "./PriceRange.module.scss";
import Input from "../../../../07-shared/UI/elementsForm/Input/Input";
import { useDispatch } from "react-redux";

import PropTypes from "prop-types";
const PriceRange = ({ rangeScaleFirst, rangeScaleSecond, setRangeScaleFirst, setRangeScaleSecond }) => {
    const dispatch = useDispatch();
    const maxRange = 2000;
    function changeRangeScaleFirstHandler(event) {
        dispatch(setRangeScaleFirst(+event.target.value));

        if (rangeScaleFirst > rangeScaleSecond) {
            dispatch(setRangeScaleSecond(rangeScaleFirst + 10));
        }
        if (rangeScaleSecond > maxRange) {
            dispatch(setRangeScaleSecond(maxRange));
        }
    }
    function changeRangeScaleSecondHandler(event) {
        dispatch(setRangeScaleSecond(+event.target.value));

        if (rangeScaleSecond < rangeScaleFirst) {
            dispatch(setRangeScaleFirst(rangeScaleSecond - 10));
        }
        if (+rangeScaleFirst < 0) {
            dispatch(setRangeScaleFirst(0));
        }
    }

    const lineRef = useRef();
    function fillColor() {
        let percent1 = (rangeScaleFirst / maxRange) * 100;
        let percent2 = (rangeScaleSecond / maxRange) * 100;
        lineRef.current.style.background = `linear-gradient(to right, var(--color-green-opc20) ${percent1}% , var(--color-green) ${percent1}% , var(--color-green) ${percent2}%, var(--color-green-opc20) ${percent2}%)`;
      
    }
    useEffect(() => {
        fillColor();
    }, [rangeScaleFirst, rangeScaleSecond]);

    return (
        <>
            <div className={styled["price-range"]}>
                <h3 className={styled["price-range__title"]}>Price Range</h3>
                <div className={styled["price-range__scale"]}>
                    <Input
                        id={styled["from-range"]}
                        type={"range"}
                        className={styled["price-range__scale-first"]}
                        min={"0"}
                        max={String(maxRange)}
                        value={String(rangeScaleFirst)}
                        step={"10"}
                        onChange={changeRangeScaleFirstHandler}
                    />
                    <div ref={lineRef} className={styled["line"]}></div>
                    <Input
                        id={styled["to-range"]}
                        type={"range"}
                        className={styled["price-range__scale-second"]}
                        min={"0"}
                        max={String(maxRange)}
                        value={String(rangeScaleSecond)}
                        step={"10"}
                        onChange={changeRangeScaleSecondHandler}
                    />
                </div>
                <form className={styled["price-range__counter"]}>
                    <p className={styled["price-range__counter-name"]}>
                        Price: <span className={styled["price-range__counter-number"]}>${rangeScaleFirst}</span> <span className={styled["price-range__counter-number"]}>--</span>
                        <span className={styled["price-range__counter-number"]}> ${rangeScaleSecond}</span>
                    </p>
                </form>

                <Input type={"button"} className={styled["button"]} value={"Filter"} />
            </div>
        </>
    );
};

PriceRange.propTypes = {
    rangeScaleFirst: PropTypes.number,
    rangeScaleSecond: PropTypes.number,
    setRangeScaleFirst: PropTypes.func,
    setRangeScaleSecond: PropTypes.func,
};

export default PriceRange;
