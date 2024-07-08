import React from "react";
import styled from "./ArticleCard.module.scss";
import PropTypes from "prop-types";

import ArrowPoint from "../../07-shared/UI/Icon/Arrow/ArrowPoint";
import { Link } from "react-router-dom";

const ArticleCard = ({ ...card }) => {
    return (
        <li className={styled["section-article-card__item"]}>
            <img src={card.imgSrc} alt="" className={styled["section-article-card__image"]} />
            <div className={styled["section-article-card__block-info"]}>
                <h3 className={styled["section-article-card__title"]}>{card.title}</h3>
                <p className={styled["section-article-card__description"]}>{card.description}</p>
                <Link to="" className={styled["section-article-card__button"]}>
                    Find Mode <ArrowPoint />
                </Link>
            </div>
        </li>
    );
};

ArticleCard.propTypes = {
    card: PropTypes.string,
};

export default ArticleCard;
