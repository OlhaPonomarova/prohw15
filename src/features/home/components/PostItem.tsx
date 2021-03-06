/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

import { PostsInterface } from "../interfaces";

interface Props {
  post: PostsInterface
}

export const PostItem = ({ post: { id, title, reaction, tags, userId } }: Props) =>
  <div css={css`
      width: 300px;
      min-height: 200px;
      padding: 20px 20px;
      margin: 30px 0px;
      border-radius: 5px;
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
    <h3>
      <Link css={css`
    color:black;
  `}
        to={`/post/${id}`}>{title}</Link>
    </h3>

    <span>{reaction}</span>
    <i>{tags}</i>
    <span>{userId}</span>

  </div>;