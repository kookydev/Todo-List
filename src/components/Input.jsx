import React, { Component } from "react";
// import Buttons from "./Buttons";
import "./Input.css";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({ value: e.target.value });
  }

  submitHandler(e) {
    this.props.func(this.state.value);
    e.preventDefault();
  }
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
