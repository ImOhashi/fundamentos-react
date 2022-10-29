import ReactDOM from "react-dom";
import React from "react";

import "./index.css";

import First from "./components/basics/First";
import WithParameter from "./components/basics/WithParameter";

ReactDOM.render(
  <div>
    <First></First>
    <WithParameter
      title="Segundo componente"
      subtitle="Muito legal!"
    ></WithParameter>
  </div>,
  document.getElementById("root")
);
