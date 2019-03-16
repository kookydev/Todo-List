import React, { Component } from "react";
import Input from "./components/Input";
import List from "./components/List";
import "./App.css";

class App extends Component {
  state = {
    listItems: [
      { label: "This is an item in my list", class: "list-item", key: 0 }
    ]
  };

  inputHandler = val => {
    let listItems = this.state.listItems;
    let inputObject = { label: val, class: "list-item", key: listItems.length };
    listItems.push(inputObject);
    console.log(listItems);
    this.setState({ listItems: listItems });
  };
  toggleHandler = () => {};
  deleteHandler = () => {};
  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <Input func={this.inputHandler} />
        <List listItems={this.state.listItems} />
      </div>
    );
  }
}

export default App;
