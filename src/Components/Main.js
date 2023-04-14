import React from "react";
import image from "../image/logo-main-light.svg";
export default function Main(props) {
  return (
    <main style={{ backgroundColor: props.status ? "" : "#000000d6" }}>
      <h1 style={{ color: props.status ? "black" : "white" }}>
        Fun facts about React
      </h1>
      <ul>
        <li style={{ color: props.status ? "black" : "white" }}>
          Was first released in 2013
        </li>
        <li style={{ color: props.status ? "black" : "white" }}>
          Was originally created by Jordan Walke
        </li>
        <li style={{ color: props.status ? "black" : "white" }}>
          Has well over 100k stars on GitHub
        </li>
        <li style={{ color: props.status ? "black" : "white" }}>
          Is maintained by Facebook
        </li>
        <li style={{ color: props.status ? "black" : "white" }}>
          Powers thousands of enterprise apps, including mobile apps
        </li>
      </ul>
      <img alt="" src={image} />
    </main>
  );
}
