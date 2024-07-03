import React, { useRef, useState } from "react";
import styled from "./PriceRange.module.scss";
import Input from "../../../../07-shared/UI/elementsForm/Input/Input";

const PriceRange = () => {
    const [rangeScaleFirst, setRangeScaleFirst] = useState(0);
    const [rangeScaleSecond, setRangeScaleSecond] = useState(500);
    const maxRange = 2000;
    function changeRangeScaleFirstHandler(event) {
        setRangeScaleFirst(+event.target.value);

        if (rangeScaleFirst > rangeScaleSecond - 150) {
            setRangeScaleSecond(rangeScaleSecond + 150);
        }
        if (rangeScaleSecond > maxRange) {
            setRangeScaleSecond(maxRange);
        }
    }
    function changeRangeScaleSecondHandler(event) {
        setRangeScaleSecond(+event.target.value);

        if (rangeScaleSecond < rangeScaleFirst + 150) {
            setRangeScaleFirst(rangeScaleFirst - 150);
        }
        if (+rangeScaleFirst < 0) {
            setRangeScaleFirst(0);
        }
    }
    const lineRef = useRef();
    function fillColor() {
        let percent1 = (rangeScaleFirst / maxRange) * 100;
        let percent2 = (rangeScaleSecond / maxRange) * 100;
        lineRef.current.style.background = `linear-gradient(to right, var(--color-green-opc20) ${percent1}% , var(--color-green) ${percent1}% , var(--color-green) ${percent2}%, var(--color-green-opc20) ${percent2}%)`;
    }
    fillColor();
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
                        max={maxRange}
                        value={rangeScaleFirst}
                        step={"10"}
                        onChange={changeRangeScaleFirstHandler}
                    />
                    <div ref={lineRef} className={styled["line"]}></div>
                    <Input
                        id={styled["to-range"]}
                        type={"range"}
                        className={styled["price-range__scale-second"]}
                        min={"0"}
                        max={maxRange}
                        value={rangeScaleSecond}
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

export default PriceRange;
