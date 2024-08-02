import React from "react";
import styled from "./ProductDetails.module.scss";
import { useSelector } from "react-redux";
import ProductImageDetails from "../../06-entities/ProductImageDetails/ProductImageDetails";
import ProductDetailsList from "../../06-entities/ProductDetailsList/ProductDetailsList";
import CountProductDetails from "../../05-features/CountProductDetails/CountProductDetails";
import ReviewProductDetails from "../../05-features/ReviewProductDetails/ReviewProductDetails";
import ProductDescription from "./../../06-entities/ProductDescription/ProductDescription";
import Tabs from "./../../05-features/Tabs/Tabs";
import ProductReviews from "./../../06-entities/ProductReviews/ProductReviews";
import Skeleton from "../../07-shared/UI/Skeleton/Skeleton.jsx";

const ProductDetails = () => {
    const { valueData } = useSelector((state) => state.productView);
    const { status } = useSelector((state) => state.apiProduct);

    return (
        <>
            <div className={styled["section-details__inner"]}>
                {status !== "succeeded" ?
                    <>
                        <Skeleton className={styled["skeleton"]}>
                            <div className={styled["section-details__skeleton"]}>
                                <ul className={styled["section-details__skeleton-list"]}>
                                    <li className={styled["section-details__skeleton-item"]}></li>
                                    <li className={styled["section-details__skeleton-item"]}></li>
                                    <li className={styled["section-details__skeleton-item"]}></li>
                                    <li className={styled["section-details__skeleton-item"]}></li>
                                </ul>
                                <div className={styled["section-details__skeleton-big-img"]}></div>
                            </div>
                        </Skeleton>
                        <Skeleton className={styled["skeleton"]}>
                            <div className={styled["section-details__skeleton-details-list"]}>

                                <div className={styled["section-details__skeleton-details-all"]}></div>
                            </div>
                        </Skeleton>
                    </>
                    :
                    <>
                        <ProductImageDetails valueData={valueData} />
                        <ProductDetailsList valueData={valueData}>
                            <CountProductDetails
                                valueData={valueData}
                                classNameTransfer={styled["wrapper-transfer-size"]}
                            />
                            <ReviewProductDetails
                                valueData={valueData}
                                classNameTransfer={styled["wrapper-transfer-review"]}
                            />
                        </ProductDetailsList>
                    </>
                }
            </div>
            {status !== "succeeded" ?
                <Skeleton className={styled["skeleton__bottom"]}>
                    <div className={styled["skeleton__bottom-section"]}>
                        <div className={styled["skeleton__tabs"]}>
                            <p className={styled["skeleton__tabs-item"]}></p>
                            <p className={styled["skeleton__tabs-item"]}></p>
                        </div>
                        <div className={styled["skeleton__description"]}>
                            <ul className={styled["skeleton__description-list"]}>
                                {Array.from({ length: 25 }, (_, index) => {
                                    return <li key={index} className={styled["skeleton__description-item"]}></li>;
                                })}
                            </ul>
                        </div>
                    </div>

                </Skeleton> :
                <Tabs>
                    <div className={styled["tabs"]}>
                        <ProductDescription valueData={valueData} />
                        <ProductReviews />
                    </div>
                </Tabs>}

        </>
    );
};

export default ProductDetails;
