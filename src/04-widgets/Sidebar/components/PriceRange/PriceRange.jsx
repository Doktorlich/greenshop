import React from "react";
import styled from "./PriceRange.module.scss";
import Input from "../../../../07-shared/UI/elementsForm/Input/Input";


const PriceRange = () => {
    return (
        <>
            <div className={styled["price-range"]}>
                <h3 className={styled["price-range__title"]}>Price Range</h3>
                <div className={styled["price-range__scale"]}>
                    <Input type={"range"}></Input>
                </div>
                <form className={styled["price-range__counter"]}>
                    <p className={styled["price-range__counter-name"]}>
                        Price: <span className={styled["price-range__counter-number"]}>$39</span> <span className={styled["price-range__counter-number"]}>--</span>
                        <span className={styled["price-range__counter-number"]}> $MAX</span>
                    </p>
                </form>

                <Input type={"button"} className={styled["button"]} value={"Filter"} />
            </div>
        </>
    );
};

export default PriceRange;
