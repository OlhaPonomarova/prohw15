/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";


interface Props {
    item: { id: number; name: string, url: string };
}

export const MenuNavItem = ({ item: { id, name, url } }: Props) => (
    <li key={id}>
        <Link css={css`
    color:black ;
    text-decoration:none ;
    text-transform:uppercase ;
    padding: 10px, 15px ;
    display: block ;
    font-size:20px ;
    margin-right: 30px;
    display:block ;
    :hover{
        text-decoration:underline;
    }
    `}
            to={url}>{name}</Link>
    </li>
);