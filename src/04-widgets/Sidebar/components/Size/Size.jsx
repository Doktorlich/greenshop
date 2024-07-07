import React from "react";
import { SIZE_LIST } from "../../Data/data";
import styled from "./Size.module.scss";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
// import { elementCountingSize } from "../../../../05-features/elementСounting/elementСounting";
const Size = ({ valueSize, setValueSize }) => {
    const dispatch = useDispatch();
    // useEffect(() => {
    //     elementCountingSize(SIZE_LIST, productData);
    // }, [productData]);

    return (
        <div className={styled["categories"]}>
            <h3 className={styled["categories__main-title"]}>Size</h3>
            <ul className={`${styled["categories__list"]}`}>
                {SIZE_LIST.map(({ title, amount }, index) => (
                    <li
                        key={index}
                        onClick={() => dispatch(setValueSize(index))}
                        className={[`${styled["categories__list-item"]}`, valueSize == index ? `${styled["categories__list-item--active"]}` : ""].join(" ")}
                    >
                        <p className={styled["categories__list-title"]}>{title}</p>
                        <p className={styled["categories__list-count"]}>({amount})</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

Size.propTypes = {
    valueSize: PropTypes.number,
    setValueSize: PropTypes.func,
    productData: PropTypes.array,
};
export default Size;
