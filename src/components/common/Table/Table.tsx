import React, { FC } from "react";
import "./TableConstructor.scss";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { TableProps } from "../../types/TableTypes";
import TableName from "./TableName";
import { CheckboxIcon, NextIcon, ReorderIcon } from "../../../assets/icons";

const Table: FC<TableProps> = ({
  data,
  columns,
  tableName,
  gridType,
  rowClick,
  rowIcons,
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
  return (
    <div className="containerTable">
      <TableName tableName={tableName} />

      <table className="mainTable">
        <TableHeader columns={changedColumns} />
        <TableBody
          data={data}
          columns={changedColumns}
          gridType={gridType}
          rowClick={rowClick}
        />
      </table>
    </div>
  );
};

export default Table;
