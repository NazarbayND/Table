import React, { FC, useState } from "react";
import "./TableConstructor.scss";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { TableProps } from "../../types/TableTypes";
import TableName from "./TableName";
import { CheckboxIcon, NextIcon, ReorderIcon } from "../../../assets/icons";
import Popup from "./Popup";

const Table: FC<TableProps> = ({
  data,
  columns,
  tableName,
  rowIcons,
  rowClick,
  popup,
}) => {
  const changedColumns = [
    rowIcons.reorder && {
      path: "reorderIcon",
      label: "",
      content: (item) => <ReorderIcon />,
    },
    rowIcons.next && {
      path: "nextIcon",
      label: "",
      content: (item) => <NextIcon />,
    },
    rowIcons.checkbox && {
      path: "checkboxIcon",
      labelComponent: () => <CheckboxIcon />,
      content: (item) => <CheckboxIcon />,
    },
    ...columns,
  ];

  const [classes, setClasses] = useState({
    box: "box",
    overlay: "overlay",
    content: "content",
  });

  const onDoubleClick = (item) => {
    if (!popup) return null;
    popup.onOpen(item);
    setClasses({
      box: "box active",
      overlay: "overlay active",
      content: `content ${popup.type}`,
    });
  };

  const handleClose = () => {
    setClasses({
      box: "box",
      overlay: "overlay",
      content: `content ${popup.type}`,
    });
  };

  return (
    <div className="containerTable">
      <TableName tableName={tableName} />

      <table className="mainTable">
        <TableHeader columns={changedColumns} />
        <TableBody
          onDoubleClick={onDoubleClick}
          data={data}
          columns={changedColumns}
          rowClick={rowClick}
        />
      </table>
      {popup && (
        <Popup popup={popup} handleClose={handleClose} classes={classes} />
      )}
    </div>
  );
};

export default Table;
