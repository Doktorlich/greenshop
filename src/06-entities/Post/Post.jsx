import React from "react";
import PropTypes from "prop-types";
import styled from "./Post.module.scss";
import { NUMBER_MONTH } from "./data/dateElem";
import { Link } from "react-router-dom";
import ArrowLineLink from "../../07-shared/UI/Icon/Arrow/ArrowLineLink";
const Post = ({ ...item }) => {
    const date = new Date(item.date);

    return (
        <li className={styled["section-blog__item"]}>
            <img className={styled["section-blog__image"]} src={item.imageSrc} alt="" />
            <div className={styled["section-blog__block-info"]}>
                <p className={styled["section-blog__date-read"]}>
                    {NUMBER_MONTH[date.getMonth()]} {date.getDate()} I Read in {item.readingTime} minutes
                </p>
                <h3 className={styled["section-blog__subtitle"]}>{item.title}</h3>
                <p className={styled["section-blog__description"]}>{item.description}</p>
                <Link to="" className={styled["section-blog__link"]}>
                    Read More
                    <ArrowLineLink />
                </Link>
            </div>
        </li>
    );
};

Post.propTypes = {
    item: PropTypes.string,
};

export default Post;
