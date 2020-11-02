import React, { FC, useState } from "react";
import "./TableConstructor.scss";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { TableProps } from "../../types/TableTypes";
import TableName from "./TableName";
import { CheckboxIcon, NextIcon, ReorderIcon } from "../../../assets/icons";
import GridComponent from "./GridComponent";

const Table: FC<TableProps> = ({
  data,
  columns,
  tableName,
  gridType,
  rowIcons,
  rowClick,
  gridContent,
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

  const [selectedRow, setSelectedRow] = useState({ _id: null });
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState();

  const onDoubleClick = (item) => {
    if (!gridType) return null;
    setContent(item);
    setIsOpen(true);
    setSelectedRow(item);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="containerTable">
      <TableName tableName={tableName} />

      <table className="mainTable">
        <TableHeader columns={changedColumns} />
        <TableBody
          onDoubleClick={onDoubleClick}
          selectedRow={selectedRow}
          data={data}
          columns={changedColumns}
          rowClick={rowClick}
        />
      </table>
      {isOpen && <GridComponent content={content} handleClose={handleClose} />}
    </div>
  );
};

export default Table;
