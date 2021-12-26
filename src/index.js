import ReactDom from "react-dom";
import App from "./App";
import { GlobalStyles } from "./global-styles";
import "normalize.css";
ReactDom.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById("app")
);
