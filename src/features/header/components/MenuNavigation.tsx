/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import dataMenu from "./menu.json"
import { MenuNavItem } from "./MenuNavItem";

export const MenuNavigation = () => (
    <ul css={css`
    display:flex;

    `}
    >
        {dataMenu.map((item) => (
            <MenuNavItem key={item.id} item={item} />
        ))}
    </ul>
);