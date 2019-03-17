import React, { Component } from "react";
import Input from "./components/Input";
import List from "./components/List";
import "./App.css";

class App extends Component {
  state = {
    listItems: [
      {
        label: "This is an item in my list",
        complete: false
      }
    ]
  };

  // Create a new list item when the input is submitted
  inputHandler = val => {
    let listItems = this.state.listItems;
    let inputObject = {
      label: val,
      key: listItems.length,
      complete: false
    };
    listItems.push(inputObject);
    console.log(listItems);
    this.setState({ listItems: listItems });
  };

  // Handle a click of the "Toggle Complete" button associated with the list item
  toggleHandler = index => {
    let listItems = this.state.listItems;
    listItems[index].complete
      ? (listItems[index].complete = false)
      : (listItems[index].complete = true);
    this.setState({ listItems: listItems });
  };

  deleteHandler = index => {
    let listItems = this.state.listItems;
    listItems.splice(index, 1);
    this.setState({ listItems: listItems });
  };

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <Input func={this.inputHandler} />
        <List
          listItems={this.state.listItems}
          deleteFunc={this.deleteHandler}
          toggleFunc={this.toggleHandler}
        />
      </div>
    );
  }
}

export default App;
