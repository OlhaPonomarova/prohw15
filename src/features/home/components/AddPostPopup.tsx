/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { AddPostForm } from "./AddPostForm";

export const AddPostPopup = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button
                css={css`
          margin-bottom: 10px;
        `}
                variant="outlined"
                onClick={handleClickOpen}
            >
                Add post
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle
                    css={css`
            text-align: center;
            padding: 15px;
            font-weight: bold;
          `}
                    id="alert-dialog-title"
                >
                    Add new post
                </DialogTitle>
                <DialogContent>
                    <AddPostForm handleClose={handleClose} />\
                </DialogContent>
            </Dialog>
        </div>
    );
};