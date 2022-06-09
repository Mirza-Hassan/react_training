import React from "react";

const JSExample = ({ title, time, items }) => (
  <div>
    <h1>{title || "Greetings!"}</h1>
    <h2>It is {time.toLocaleTimeString()}.</h2>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default JSExample;
