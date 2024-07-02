import React, { useState } from "react";
import { CATEGORIES_LIST } from "../../Data/data";
import styled from "./Categories.module.scss";

const Categories = () => {
    const [valueId, setValueId] = useState(0);
    const changeValueIdHandler = (event) => {
        if (event.target.hasAttribute("id")) {
            setValueId(event.target.id);
        }
   
        console.log(event.target);
    };
    return (
        <div className={styled["categories"]}>
            <h3 className={styled["categories__main-title"]}>Categories</h3>
            <ul className={`${styled["categories__list"]}`} onClick={changeValueIdHandler}>
                {CATEGORIES_LIST.map(({ id, title }) => (
                    <li key={id} id={id} className={[`${styled["categories__list-item"]}`, valueId.toString() == id.toString() ? `${styled["categories__list-item--active"]}` : ""].join(" ")}>
                        <p className={styled["categories__list-title"]}>{title}</p>
                        <p className={styled["categories__list-count"]}>(33)</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;
