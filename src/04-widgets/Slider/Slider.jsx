import React, { useEffect } from "react";
import styled from "./Slider.module.scss";
import SliderBlock from "../../06-entities/SliderBlock/SliderBlock";
import { useDispatch, useSelector } from "react-redux";
import { setSlide } from "./provider/sliderSlice";
import Skeleton from "../../07-shared/UI/Skeleton/Skeleton.jsx";
// import Button from "../../07-shared/UI/Button/Button";
const Slider = () => {
    const { productData, status } = useSelector((state) => state.apiProduct);
    const { slide } = useSelector((state) => state.carousel);
    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setInterval(() => {
            if (slide < 2) {
                dispatch(setSlide(slide + 1));
            } else {
                dispatch(setSlide(0));
            }
        }, 5000);
        return () => clearInterval(timer);
    }, [slide]);
    // if (status !== "succeeded") {
    //     return;
    // }
    const SLIDER_LIST = [
        { id: productData[1]?.id, image: productData[1]?.urlImagePreview },
        { id: productData[2]?.id, image: productData[2]?.urlImagePreview },
        { id: productData[3]?.id, image: productData[3]?.urlImagePreview },
    ];

    return (

        <div className={styled["slider-carousel"]}>

            {status !== "succeeded" ?
                <Skeleton>
                    <div className={styled["slider-carousel__skeleton"]}>
                    </div>
                </Skeleton> :
                <>
                    {SLIDER_LIST.map(({ ...item }, index) => (
                        <SliderBlock key={item.id} {...item}
                                     className={+slide === +index ? `${styled["slider--active"]}` : ""} />
                    ))}

                    <div className={styled.breadcrumbs}>
                        {SLIDER_LIST.map((_, index) => {
                            return (
                                <button
                                    key={index}
                                    onClick={() => dispatch(setSlide(index))}
                                    className={[styled["breadcrumbs__elem"], +slide === +index ? `${styled["breadcrumbs__elem--active"]}` : ""].join(" ")}
                                />
                            );
                        })}
                    </div>
                </>
            }
        </div>
    );
};

export default Slider;
