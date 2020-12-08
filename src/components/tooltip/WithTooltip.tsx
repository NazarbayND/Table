import React, { useState } from "react";
import "./Tooltip.scss";

const WithTooltip = ({ content }) => {
  const [open, SetOpen] = useState(false);
  const handleOpen = () => SetOpen(!open);
  return (
    <React.Fragment>
      {/* <Component /> */}
      <button onClick={handleOpen} className="Tooltip">
        Tooltip
      </button>
      {/* {open && (
        <div>
          {content}
          Tooltip
        </div>
      )} */}
    </React.Fragment>
  );
};

export default WithTooltip;
