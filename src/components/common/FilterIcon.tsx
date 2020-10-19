import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import Popover from "@material-ui/core/Popover";

library.add(faFilter);

const FilterIcon = ({ onFilter, column }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const [filter, setFilter] = useState("");

  const handleChange = (e) => {
    setFilter(e.currentTarget.value);
  };
  const handleFilter = () => {
    onFilter(filter, column);
  };
  useEffect(() => {
    handleFilter();
  }, [filter]);

  const handleReset = (e) => {
    setFilter("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFilter();
  };

  return (
    <>
      <FontAwesomeIcon
        icon="filter"
        color="#646464"
        onClick={handleClick}
        className="filterIcon"
      />
      <Popover
        className="popOver"
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <form
          className="form-group"
          style={{
            display: "flex",
            height: "70px",
            width: "100px",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
          onSubmit={handleSubmit}
        >
          <label>Filter</label>
          <input
            value={filter}
            id="filter"
            name="filter"
            type="text"
            className="form-control"
            style={{ width: "80px" }}
            onChange={handleChange}
            autoFocus
          />
          <div>
            <button style={{ fontSize: "12px" }} type="submit">
              Filter
            </button>
            <button style={{ fontSize: "12px" }} onClick={handleReset}>
              Reset
            </button>
          </div>
        </form>
      </Popover>
    </>
  );
};

export default FilterIcon;
