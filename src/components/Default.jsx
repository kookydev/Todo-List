import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./Default.css";

const Default = props => {
  return (
    <div className="default-container">
      <FontAwesomeIcon icon={faArrowUp} className="bouncy-arrow" />
      <span className="arrow-shadow" />
      <span>
        There are no items in your list, enter text above and click "Submit" to
        add one
      </span>
    </div>
  );
};

export default Default;
