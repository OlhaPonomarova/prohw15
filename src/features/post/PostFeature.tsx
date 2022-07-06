/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useDataPosts } from "./hooks";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import { PostEditForm, PostForm } from "./components";


export const PostFeature = () => {

  const { post, onEditPostSubmit, isEdit } = useDataPosts();

  return (
    <div css={css`
    position: relative;
    `}>
      {!isEdit && (
        <Link to={`/post/${post.id}/edit`}>
          <EditIcon
            css={css`
    position: absolute ;
    right:170px;
    top: 10px;
    cursor: pointer;
    color: black;
    `}
          />
        </Link>
      )}
      {isEdit ? (
        <PostEditForm post={post} onSubmit={onEditPostSubmit} />
      ) : (
        <PostForm post={post} />
      )}
    </div >
  );
};
