import React, { Component } from "react";
import Input from "./components/Input";
import List from "./components/List";
import "./App.css";

class App extends Component {
  vars = {
    listItems: [
      { label: "This is an item in my list", style: "list-item" },
      { label: "This is an item in my list", style: "list-item" },
      { label: "This is an item in my list", style: "list-item" }
    ]
  };

  input = val => {
    this.vars.listItems.push(val);
  };
  complete = () => {};
  delete = () => {};
  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <Input />
        <List listItems={this.vars.listItems} />
      </div>
    );
  }
}

export default App;
