import React from "react";
import Buttons from "./Buttons";
import "./Input.css";

const Input = props => {
  return (
    <div className="input-container">
      <input
        className="text-input"
        type="text"
        name="textInput"
        id="textInput"
      />
      <Buttons class="buttons buttons-save" func={props.func} label="Add" />
    </div>
  );
};

export default Input;
