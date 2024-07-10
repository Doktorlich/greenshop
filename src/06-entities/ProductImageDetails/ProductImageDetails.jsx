import React from "react";
import PropTypes from "prop-types";
import styled from "./ProductImageDetails.module.scss";
import SearchIcon from "../../07-shared/UI/Icon/SearchIcon/SearchIcon";
import { useDispatch, useSelector } from "react-redux";
import { setImageDetailsProductId } from "../../04-widgets/ProductDetails/provider/productDetails";
const ProductImageDetails = ({ valueData }) => {
    // const [imageDetailsProductId, setImageDetailsProductId] = useState(0);
    const { imageDetailsProductId } = useSelector((state) => state.productDetails);
    const dispatch = useDispatch();
    if (valueData < 0) {
        return;
    }
    return (
        <div className={styled["section-details__menu-image"]}>
            <ul className={styled["section-details__list"]}>
                {valueData.imageList.map((img, index) => {
                    return (
                        <li
                            key={index}
                            className={[styled["section-details__item"], +imageDetailsProductId === +index ? styled["section-details__item--active"] : ""].join(" ")}
                            onClick={() => {
                                dispatch(setImageDetailsProductId(index));
                            }}
                        >
                            <img className={styled["section-details__image"]} src={img} alt="" />
                        </li>
                    );
                })}
            </ul>
            <div className={styled["section-details__big-image"]}>
                <div className={styled["section-details__wrapper-icon-search"]}>
                    <SearchIcon className={styled["icon-search"]} />
                </div>
                <img className={styled["section-details__image-element"]} src={valueData.imageList[imageDetailsProductId]} alt="" />
            </div>
        </div>
    );
};

ProductImageDetails.propTypes = {
    valueData: PropTypes.object.isRequired,
    // imageList: PropTypes.array,
};

export default ProductImageDetails;
