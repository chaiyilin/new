import React from "react";
import ReactDOM from "react-dom";
import Loadable from "react-loadable";
import "./index.css";
import App from "./components/App";

console.log(process.env.RELATIVE_LOCAL_PATH);
let Entry = <App />;
if (process.env.NODE_ENV === "development" && process.env.RELATIVE_LOCAL_PATH) {
  const LoadableComponent = Loadable({
    loader: () => import(`./${process.env.RELATIVE_LOCAL_PATH}`),
    loading() {
      return <div>Loading...</div>;
    }
  });

  Entry = <LoadableComponent data-testid="entry" />;
}
ReactDOM.render(Entry, document.getElementById("root"));
