import React from "react";
import ListItem from "./ListItem";

const List = props => {
  return (
    <div className="list">
      {props.listItems.map((item, index) => {
        return (
          <div>
            <ListItem label={item.label} class={item.class} indexOf={index} />
          </div>
        );
      })}
    </div>
  );
};

export default List;
