import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/css/App.scss";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/Header";
import { Container } from "react-bootstrap";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Container>
      <App />
    </Container>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();