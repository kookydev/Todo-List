import React from "react";
import "./Buttons.css";

const Buttons = props => {
  return (
    <button className={props.class} onClick={props.func}>
      {props.label}
    </button>
  );
};

export default Buttons;
