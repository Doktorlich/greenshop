import React from "react";
import styled from "./SliderBlock.module.scss";

import Button from "../../07-shared/UI/Button/Button";
import { useSelector } from "react-redux";

const Slider = ({ ...slide }) => {
    const { status } = useSelector((state) => state.apiProduct);
// TODO исправить использование кнопки на слайде
    if (status !== "succeeded") {
        return;
    }

    return (
        <div className={[styled["slider"], `${slide.className}`].join(" ")}>
            <div className={styled["slider__left-container"]}>
                <h1 className={styled["main-title"]}>Let’s Make a Better Planet</h1>
                <h3 className={styled["slider__subtitle"]}>Welcome to GreenShop</h3>
                <h2 className={styled["slider__title"]}>
                    Let’s Make a Better <span>Planet</span>
                </h2>

                <p className={styled["slider__description"]}>
                    We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to
                    create an unique Urban Jungle. Order your favorite plants!
                </p>
                <Button classNameProp={styled["button"]}>SHOP NOW</Button>
            </div>
            <div className={styled["slider__image-container"]}>
                <img className={styled["slider__image-small"]} src={slide.image} data-id={slide.id} alt={""} />
                <img className={styled["slider__image-big"]} src={slide.image} data-id={slide.id} alt={""} />
            </div>
        </div>
    );
};

export default Slider;
