import React from "react";
import ReactDOM from "react-dom";
import Loadable from "react-loadable";
import styledNormalize from "styled-normalize";
import { createGlobalStyle } from "styled-components";
import App from "./components/App";

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  body {
    margin: 0;
    box-sizing:border-box;
  }
`;

console.log(process.env.RELATIVE_LOCAL_PATH);
let Entry = (
  <>
    <GlobalStyle />
    <App />
  </>
);
if (process.env.NODE_ENV === "development" && process.env.RELATIVE_LOCAL_PATH) {
  const LoadableComponent = Loadable({
    loader: () => import(`./${process.env.RELATIVE_LOCAL_PATH}`),
    loading() {
      return <div>Loading...</div>;
    }
  });

  Entry = (
    <>
      <GlobalStyle />
      <LoadableComponent />
    </>
  );
}
ReactDOM.render(Entry, document.getElementById("root"));
