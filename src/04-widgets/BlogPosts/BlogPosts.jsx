import React from "react";
import styled from "./BlogPosts.module.scss";
import { postInfo } from "./data/postInfo";
import Post from "../../06-entities/Post/Post";
const BlogPosts = () => {
    return (
        <div className={styled["section-blog__inner"]}>
            <h2 className={styled["section-blog__title"]}>Our Blog Posts</h2>
            <p className={styled["section-blog__title-description"]}>We are an online plant shop offering a wide range of cheap and trendy plants. </p>
            <ul className={styled["section-blog__list"]}>
                {postInfo.map((item) => (
                    <Post key={item.id} {...item} />
                ))}
            </ul>
        </div>
    );
};

export default BlogPosts;
