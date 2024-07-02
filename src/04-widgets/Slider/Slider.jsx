import React from "react";
import styled from "./Slider.module.scss";

import Button from "../../07-shared/UI/Button/Button";
const Slider = () => {
    return (
        <div className={styled.slider}>
            <div className={styled["slider__left-container"]}>
                <h1 className={styled["main-title"]}>Let’s Make a Better Planet</h1>
                <h3 className={styled["slider__subtitle"]}>Welcome to GreenShop</h3>
                <h2 className={styled["slider__title"]}>Let’s Make a Better Planet</h2>

                <p className={styled["slider__description"]}>
                    We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!
                </p>
                <Button className={styled["button"]}>SHOP NOW</Button>
            </div>
            <div className={styled["slider__image-container"]}>
                <img className={styled["slider__image-big"]} src="" />
                <img className={styled["slider__image-small"]} src="" />
            </div>
            <div className={styled.breadcrumbs}></div>
        </div>
    );
};

export default Slider;
