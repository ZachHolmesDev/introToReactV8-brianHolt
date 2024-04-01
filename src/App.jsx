import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.animal),
    React.createElement("h1", {}, props.name),
    React.createElement("h1", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!!!"),
    React.createElement(Pet, {
      animal: "Dog",
      name: "Luna",
      breed: "Labrador",
    }),
    React.createElement(Pet),
    React.createElement(Pet),
  ]);
};

const container = document.getElementById("root");
// const root = ReactDOM.createRoot(container);
const root = createRoot(container);
root.render(React.createElement(App));
