import React from "react";
import styled from "./ArticleCards.module.scss";
import ArticleCard from "../../06-entities/ArticleCard/ArticleCard";
import { ARTICLE_CARD_INFO } from "./data/articleCardData";

const ArticleCards = () => {
    return (
        <div className={styled["section-article-card__inner"]}>
            <ul className={styled["section-article-card__list"]}>
                {ARTICLE_CARD_INFO.map(({ ...card }) => (
                    <ArticleCard key={card.id} {...card} />
                ))}
            </ul>
        </div>
    );
};

export default ArticleCards;
