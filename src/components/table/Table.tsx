import React, { useState } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import "./Table.scss";
import SettingsIcon from "@material-ui/icons/Settings";
import names from "../../assets/names";
import { AddIcon, DeleteIcon, EditIcon } from "../../assets/icons";
import CircularProgress from "@material-ui/core/CircularProgress";

const header = [
  {
    path: "next",
    label: "Next",
    filter: true,
    style: { width: "9em" },
    visible: true,
  },
  {
    path: "trainer",
    label: "Trainer",
    filter: true,
    style: { width: "12em" },
    visible: true,
  },
  {
    path: "delivery",
    label: "Delivery",
    filter: true,
    style: { width: "6em" },
    visible: true,
  },
  {
    path: "duration",
    label: "Duration",
    filter: true,
    style: { width: "6em" },
    visible: true,
  },
  {
    path: "course",
    label: "Course",
    filter: true,
    style: { width: "9em" },
    visible: true,
  },
  {
    path: "description",
    label: "Description",
    filter: true,
    style: { width: "15em" },
    visible: true,
  },
  {
    path: "frequency",
    label: "Frequency",
    filter: true,
    style: { width: "15em" },
    visible: true,
  },
  {
    path: "last",
    label: "Last",
    filter: true,
    style: { width: "8em" },
    visible: true,
  },
  {
    path: "by",
    label: "By",
    filter: true,
    style: { width: "8em" },
    visible: true,
  },
];
const name = "Employee Training Details";

const Table = ({ renderOpenUp }) => {
  const [headers, setHeaders] = useState(header);
  const [setting, setSetting] = useState(false);

  const handleColumnDelete = () => {
    setSetting(!setting);
  };
  const isLoading = false;
  const handleDelete = (item) => {
    setHeaders(headers.filter((head) => head.path !== item));
  };
  return (
    <div className="Table">
      <div className="Name">
        <span>{name}</span>
        <div className="containerIcons">
          <SettingsIcon
            height="1.2em"
            width="1.2em"
            onClick={handleColumnDelete}
            style={{ cursor: "pointer" }}
          />
          <AddIcon width="1.2em" height="1.2em" />
          <EditIcon width="1.2em" height="1.2em" />
          <DeleteIcon width="1.2em" height="1.2em" />
        </div>
      </div>
      <TableHeader
        header={headers}
        setting={setting}
        handleDelete={handleDelete}
      />
      {isLoading ? (
        <CircularProgress className="Progress" />
      ) : (
        <TableBody
          data={names[0].courseDetails}
          header={headers}
          renderOpenUp={renderOpenUp}
          tableName={name}
        />
      )}
    </div>
  );
};

export default Table;
