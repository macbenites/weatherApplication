import { createGlobalStyle } from "styled-components";
import background from "./img/background.svg";

export const GlobalStyles = createGlobalStyle`

html, body{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background: url(${background}) ;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
    font-family: 'Montserrat', sans-serif;


    
}
`;
