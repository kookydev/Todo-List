import React, { Component } from "react";
import Input from "./components/Input";
import List from "./components/List";
import Default from "./components/Default";
import "./App.css";

class App extends Component {
  state = {
    listItems: []
  };

  // Create a new list item when the input is submitted
  inputHandler = val => {
    let listItems = this.state.listItems;
    let inputObject = {
      label: val,
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

  // Handle a click of the Delete button associated with a list item
  deleteHandler = index => {
    let listItems = this.state.listItems;
    listItems.splice(index, 1);
    this.setState({ listItems: listItems });
  };

  // Show default instructions if the list is empty
  contentHandler = () => {
    if (this.state.listItems.length === 0) {
      return <Default />;
    } else {
      return (
        <List
          listItems={this.state.listItems}
          deleteFunc={this.deleteHandler}
          toggleFunc={this.toggleHandler}
        />
      );
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <Input func={this.inputHandler} />
        {this.contentHandler()}
      </div>
    );
  }
}

export default App;
