import React, { Component } from "react";
// import Buttons from "./Buttons";
import "./Input.css";

class Input extends Component {
  state = { value: "" };

  changeHandler = e => {
    this.setState({ value: e.target.value });
  };

  submitHandler = e => {
    this.props.func(this.state.value);
    e.preventDefault();
    this.setState({ value: "" });
  };
  render() {
    return (
      <form className="input-container" onSubmit={this.submitHandler}>
        <input
          className="text-input"
          type="text"
          value={this.state.value}
          onChange={this.changeHandler}
        />
        <input className="buttons buttons-save" type="submit" value="Submit" />
      </form>
    );
  }
}

export default Input;
