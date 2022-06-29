/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { PostsInterface } from "../interfaces";

interface Props {
    post: PostsInterface
}

export const PostItem = ({ post: { id, title, body, reaction, tags, userId } }: Props) =>
    <div css={css`
      width: 300px;
      min-height: 200px;
      padding: 20px 20px;
      margin: 30px 0px;
      border-radius: 10px;
      background-color: white;
      display: flex;
      flex-direction: column;
      :hover {
        transform: scale3d(1.2, 1.2, 1);
        background-color:grey;
      }

      h3 {
        cursor: pointer;
        font-size: 20px;
        font-weight: bold;
        flex-grow: 3;
      }
      div {
        display: flex;
        justify-content: space-between;
      }
  `} >
        <h3>{title}</h3>
        <p>{body}</p>
        <span>{reaction}</span>
        <span>{tags}</span>
        <span>{userId}</span>

    </div>;