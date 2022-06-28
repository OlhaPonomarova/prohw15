/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const PageFeature = ({ children }: any) => <div
    css={css`
max-width:800px;
margin:auto ;
box-shadow: 1px 1px 4px 2px  #00000063;
padding:15px ;
margin-top:10px;
`}
>{children}
</div>;