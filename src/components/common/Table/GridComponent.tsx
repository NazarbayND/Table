import React from "react";
import { XButtonIcon } from "../../../assets/icons";

const GridComponent = ({ content, handleClose }) => {
  return (
    <div className="popup-box">
      <div className="box">
        <div className="header">
          <span className="text">Popup name</span>
          <XButtonIcon className="x-button" onClick={handleClose} />
        </div>
        <div className="content"></div>
      </div>
    </div>
  );
};

export default GridComponent;
