import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root{
     --main-color : #242629;
     --background-color: #16161a; 
     --link-color : #7f5af0;
     --headline : #fffffe;
     --tertiary : #2cb67d;
     --paragraph : #94a1b2;
     --border : #34394E;
}

html, body{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: var(--main-color);
    font-family: 'Montserrat', sans-serif; 
}
`;
