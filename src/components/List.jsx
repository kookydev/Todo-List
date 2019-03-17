import React from "react";
import ListItem from "./ListItem";

const List = props => {
  return (
    <div className="list">
      {props.listItems.map((item, index) => {
        return (
          <ListItem
            label={item.label}
            class={`list-item ${item.complete && "complete"}`}
            key={index}
            index={index}
            deleteFunc={props.deleteFunc}
            toggleFunc={props.toggleFunc}
          />
        );
      })}
    </div>
  );
};

export default List;
