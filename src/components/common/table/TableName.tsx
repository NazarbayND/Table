import React from "react";
import { AddIcon, DeleteIcon, EditIcon } from "../../../assets/icons";

const TableName = ({ tableName }) => {
  return (
    <div className="tableName">
      <span className="text">{tableName}</span>
      <div className="containerIcons">
        <AddIcon />
        <EditIcon />
        <DeleteIcon />
      </div>
    </div>
  );
};

export default TableName;
