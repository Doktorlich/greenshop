import React from "react";
import styled from "./ArticleCards.module.scss";
import ArticleCard from "../../06-entities/ArticleCard/ArticleCard";
import { ARTICLE_CARD_INFO } from "./data/articleCardData";
import { useSelector } from "react-redux";
import Skeleton from "../../07-shared/UI/Skeleton/Skeleton.jsx";

const ArticleCards = () => {
    const { status } = useSelector((state) => state.apiProduct);
    return (
        <div className={styled["section-article-card__inner"]}>
            {status !== "succeeded" ?
                <Skeleton className={styled["skeleton"]}>
                    {Array.from({ length: 2 }, (_, index) => {
                        return <div key={index} className={styled["section-article-card__skeleton"]}></div>;
                    })}
                </Skeleton> :
                <ul className={styled["section-article-card__list"]}>
                    {ARTICLE_CARD_INFO.map(({ ...card }) => (
                        <ArticleCard key={card.id} {...card} />
                    ))}
                </ul>}

        </div>
    );
};

export default ArticleCards;

