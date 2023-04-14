import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import "../style.css";

export default function App() {
  const [toggle, setToggle] = React.useState(true);

  function handleClick() {
    setToggle((previous) => !previous);
  }

  return (
    <>
      <Navbar status={toggle} handle={handleClick} />
      <Main status={toggle} />
    </>
  );
}
