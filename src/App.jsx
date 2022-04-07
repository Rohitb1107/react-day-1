import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const mobileOS = ["Android", "Blackberry", "IPhone", "Windows Phone"];
  const company = ["Samsung", "HTC", "IPhone", "Windows Phone"];

  return (
    <>
      <h1>mobileOS Operating System</h1>
      <ul>
        {mobileOS.map((el) => {
          return <li>{el}</li>;
        })}
      </ul>

      <h1>mobileOS Operating System</h1>
      <ul>
        {company.map((el) => {
          return <li>{el}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
