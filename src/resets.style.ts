import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0%;
        padding: 0%;
        box-sizing: border-box;
    }

    html,
    body,
    #ROOT,
    canvas {
        height: 100%;
        width: 100%;
    }

`;

export const theme = {
  flexin: (jc: string = `center`, ai: string = `center`, fd: string = `row`, fw: string = `flex-wrap`) => css`
    display: flex;
    justify-content: ${jc};
    align-items: ${ai};
    flex-direction: ${fd};
    flex-wrap: ${fw};
  `,
};
