import React from "react";
import image from "../image/logo192.png";
export default function Navbar(props) {
  return (
    <nav
      className="navbar  my-nav shadow-sm"
      style={{ backgroundColor: props.status ? "white" : "black" }}
    >
      <img src={image} alt="" className="navbar-brand" />
      <h2>ReactFacts</h2>
      <div className="nav--right">
        <span style={{ color: props.status ? "black" : "#bdbdbd" }}>Light</span>
        <div
          className="check"
          style={{ backgroundColor: props.status ? "black" : "white" }}
        >
          <input
            type="checkbox"
            onClick={props.handle}
            style={{
              transform: props.status
                ? "translate(1px ,1px)"
                : "translate(21px ,1px)",
              backgroundColor: props.status ? "white" : "black",
            }}
          />
        </div>
        <span style={{ color: props.status ? "#bdbdbd" : "white" }}>Dark</span>
      </div>
    </nav>
  );
}
