import React from "react";
import styled from "./BlogPosts.module.scss";
import { postInfo } from "./data/postInfo";
import Post from "../../06-entities/Post/Post";
import Skeleton from "../../07-shared/UI/Skeleton/Skeleton.jsx";
import { useSelector } from "react-redux";

const BlogPosts = () => {
    const { status } = useSelector((state) => state.apiProduct);

    return (
        <div className={styled["section-blog__inner"]}>
            <h2 className={styled["section-blog__title"]}>Our Blog Posts</h2>
            <p className={styled["section-blog__title-description"]}>We are an online plant shop offering a wide range
                of cheap and trendy plants. </p>
            {status !== "succeeded" ?
                <Skeleton className={styled["skeleton"]}>
                    {Array.from({ length: 4 }, (_, index) => {
                        return <div key={index} className={styled["section-blog__skeleton"]}></div>;
                    })}
                </Skeleton> :
                <ul className={styled["section-blog__list"]}>
                    {postInfo.map((item) => (
                        <Post key={item.id} {...item} />
                    ))}
                </ul>}

        </div>
    );
};

export default BlogPosts;
