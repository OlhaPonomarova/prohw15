/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Button, TextField } from "@mui/material"
import { useAddPost } from "../hooks";
import { FieldError } from "./FieldError";

interface Props {
    handleClose: () => void;
}

export const AddPostForm = ({ handleClose }: Props) => {
    const { onSubmitAddPost, errors } = useAddPost(handleClose);

    return (
        <form
            onSubmit={onSubmitAddPost}
            css={css`
        width: 350px;
        margin-top: 5px;
        display: flex;
        flex-direction: column;
        gap: 15px;
      `}
        >
            <TextField
                error={errors.title}
                name="title"
                label="Title"
                variant="outlined"
            />
            <FieldError
                isError={errors.title}
                title="The title must contain Latin characters, be from 5 to 20 characters long"
            />
            <TextField
                error={errors.description}
                name="description"
                label="Description"
                variant="outlined"
            />

            <FieldError
                isError={errors.description}
                title="Description field length must be between 10 and 100 characters"
            />
            <Button
                css={css`
          width: 120px;
          align-self: flex-end;
        `}
                type="submit"
                variant="contained"
            >
                Create
            </Button>
        </form>
    );
};