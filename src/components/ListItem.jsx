import React from "react";
import Buttons from "./Buttons";
import "./ListItem.css";

const ListItem = props => {
  return (
    <div className={props.class}>
      <span>{props.label}</span>
      <Buttons
        class="buttons buttons-complete"
        func=""
        label="Toggle Complete"
      />
      <Buttons class="buttons buttons-delete" func="" label="Delete" />
    </div>
  );
};

export default ListItem;
