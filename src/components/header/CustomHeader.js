import React from "react";
import "./CustomHeader.scss";

import cubeLogo from "../assets/Icons/cube-logo.png";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import HistoryIcon from "@material-ui/icons/History";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ClearIcon from "@material-ui/icons/Clear";

const CustomHeader = () => {
  return (
    <div className="mainContainer">
      <img src={cubeLogo} alt="logo" className="cubeLogo" />
      <div className="secondContainer">
        <SearchIcon className="materialIcons" />
        <MenuIcon className="materialIcons" />
        <div className="moduleDescription">
          <span> ENG &#62; Training Record Module (TR) </span>
        </div>
        <HistoryIcon className="materialIcons" />
        <MoreVertIcon className="materialIcons" />
        <ClearIcon className="materialIcons" />

        <div className="dateShow">
          <span> 11:15AM 10/06/2020 </span>
        </div>
      </div>
    </div>
  );
};
export default CustomHeader;
