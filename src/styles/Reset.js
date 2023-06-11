import { createGlobalStyle } from "styled-components";

export const GlobalReset = createGlobalStyle`

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;

}

button{
    cursor: pointer;
    background: transparent;
    border: none;
}

ul, ol {
    list-style: none;

input{
    background: transparent;
    border: none;
}

}`;
