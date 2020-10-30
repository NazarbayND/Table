import React, { FC } from "react";
import "./TableConstructor.scss";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { TableProps } from "../../types/TableTypes";
import TableName from "./TableName";

const Table: FC<TableProps> = ({
  data,
  columns,
  tableName,
  gridType,
  rowClick,
  rowIcons,
}) => {
  return (
    <div className="containerTable">
      <TableName tableName={tableName} />

      <table className="mainTable">
        <TableHeader columns={columns} rowIcons={rowIcons} />
        <TableBody
          data={data}
          columns={columns}
          gridType={gridType}
          rowClick={rowClick}
          rowIcons={rowIcons}
        />
      </table>
    </div>
  );
};

export default Table;
