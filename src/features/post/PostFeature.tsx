/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useDataPosts } from "./hooks";
import { Link } from "react-router-dom";

export const PostFeature = () => {

    const { title, body, tags, userId, reaction } = useDataPosts();

    return <div css={css`
    max-width: 800px;
    margin: auto;
    border: 2px solid black;
    border-radius: 10px;
    padding: 30px 25px;
    background-color: #e6e2e7;
    margin-bottom: 100px;
    h1 {
      font-size: 30px;
      text-align: center;
      text-shadow: 3px 3px 5px #a37a7a;
      margin-bottom: 50px;
    }
    p {
      font-size: 20px;
      line-height: 30px;
      margin: 20px 20px;
    }
    span {
      margin-left: 20px;
    }
    div {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 30px;
    }
   
  `}>
        <h1>{title}</h1>
        <p>{body}</p>
        <div>
            <i>{tags}</i>
            <span>userId: {userId}</span>
            <span>likes: {reaction}</span>
        </div>
        <Link css={css`
    color:black;
    text-transform:uppercase;
    box-shadow: 2px 0 2px 4px ;
  `} to="/"> Back to start page</Link>
    </div >

};