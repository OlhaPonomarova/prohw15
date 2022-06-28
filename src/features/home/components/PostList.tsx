/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { PostsInterface } from "../interfaces";
import { PostItem } from "./PostItem";

interface Props {
    posts: PostsInterface[];
}

export const PostList = ({ posts }: Props) => (
    <div css={css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: #ddd;
    margin-bottom: 20px;
  `}
    >
        {posts.map((posts) => (
            <PostItem post={posts} />
        ))}
    </div>
);