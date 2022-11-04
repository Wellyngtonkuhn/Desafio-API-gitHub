import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, body{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-size: 16px;
    }

    body{
        background-color: #22272e;
        color: #ffffff;
    }

    p{
        color: #FAFAFA60;
    }
`;
