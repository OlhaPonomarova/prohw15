/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { MenuNavigation } from "./components";

export const HeaderFeature = () => (
    <header
        css={css`
    background: #cbbfbf80;;
    `}
    >
        <div
            css={css`
        max-width:800px ;
        margin:auto ;
        display: flex ;
        `}
        >
            <MenuNavigation />
        </div>
    </header >
);
