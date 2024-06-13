import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom";

// const elem = React.createElement(
//   "div",
//   "",
//   React.createElement("h1", "", "Hello All")
// );

// const elem1 = React.createElement(
//   "ul",
//   "",
//   React.createElement("li", "", "List Item 1"),
//   React.createElement("li", "", "List Item 2"),
//   React.createElement("li", "", "List Item 3"),
//   React.createElement("li", "", "List Item 4"),
//   React.createElement("li", "", "List Item 5")
// );

// const users = [
//   { username: "User 1", location: "NY" },
//   { username: "User 2", location: "NJ" },
//   { username: "User 3", location: "PA" },
//   { username: "User 4", location: "CA" },
// ];

// const elem3 = (
//   <ul>
//     {users.map((user, index) => {
//       return <li key={index}>{user.username + " , " + user.location}</li>;
//     })}
//   </ul>
// );

// //ReactDOM.render(elem, document.getElementById("root"));
// ReactDOM.render(elem3, document.getElementById("root")); //since id is unique we can render only 1 element using getelemntbyid()
