import React, { useEffect, useState } from "react";
import styled from "./Slider.module.scss";
import SliderBlock from "../../06-entities/SliderBlock/SliderBlock";
import { useSelector } from "react-redux";
// import Button from "../../07-shared/UI/Button/Button";
const Slider = () => {
    const { productData } = useSelector((state) => state.apiProduct);
    const [slide, setSlide] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            if (slide < 2) {
                setSlide(slide + 1);
            } else {
                setSlide(0);
            }
        }, 5000);

        // очистка интервала
        return () => clearInterval(timer);
    }, [slide]);
    if (!productData.length > 0) {
        return;
    }
    const SLIDER_LIST = [
        { id: productData[1].id, image: productData[1].urlImagePreview },
        { id: productData[2].id, image: productData[2].urlImagePreview },
        { id: productData[3].id, image: productData[3].urlImagePreview },
    ];

    return (
        <div className={styled["slider-carousel"]}>
            {SLIDER_LIST.map(({ ...item }, index) => (
                <SliderBlock key={item.id} {...item} className={+slide == +index ? `${styled["slider--active"]}` : ""} />
            ))}

            <div className={styled.breadcrumbs}>
                {SLIDER_LIST.map((_, index) => {
                    return <button key={index} onClick={() => setSlide(index)} className={[styled["breadcrumbs__elem"], +slide == +index ? `${styled["breadcrumbs__elem--active"]}` : ""].join(" ")} />;
                })}
            </div>
        </div>
    );
};

export default Slider;
