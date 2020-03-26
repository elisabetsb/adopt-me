import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Tirma",
      animal: "Cat",
      breed: "DSH"
    }),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese"
    }),
    React.createElement(Pet, { name: "Misu", animal: "Cat", breed: "DLH" })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
