import React from "react";
import { XButtonIcon } from "../../assets/icons";

const Popup = ({ popup, handleClose, classes }) => {
  return (
    <>
      <div className={classes.box}>
        <div className="header">
          <span className="text">Popup name</span>
          <XButtonIcon className="x-button" onClick={handleClose} />
        </div>
        <div className={classes.content} style={popup.style}>
          {popup.content && popup.content()}
        </div>
      </div>
      <div className={classes.overlay} onClick={handleClose}></div>
    </>
  );
};

export default Popup;
