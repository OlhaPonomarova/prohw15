/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "@mui/material";
import { PostsInterface } from "../interfaces";
import TextField from '@mui/material/TextField';

interface Props {
    post: PostsInterface;
    onSubmit: (e: any) => void;
}

export const PostEditForm = ({
    post: { title, body }, onSubmit,
}: Props) => (
    <form
        onSubmit={onSubmit}
        css={css`
    position: relative;
    display:flex;
    flex-direction: column ;
    .MuiTextField-root{
        margin-bottom: 10px;
    }
   `}>
        <TextField name="title" defaultValue={title} multiline />
        <TextField name="body" defaultValue={body} multiline />
        <Button type="submit" variant="contained" color="info">
            Save
        </Button>
    </form >
);