import React from "react";
import Buttons from "./Buttons";
import "./ListItem.css";

const ListItem = props => {
  return (
    <div className={props.class}>
      <span className="list-item-label">{props.label}</span>
      <div className="list-item-buttons">
        <Buttons
          class="buttons buttons-complete"
          func={props.toggleFunc}
          label="Toggle Complete"
        />
        <Buttons
          class="buttons buttons-delete"
          func={props.deleteFunc}
          label="Delete"
        />
      </div>
    </div>
  );
};

export default ListItem;
