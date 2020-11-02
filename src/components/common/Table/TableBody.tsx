import React from "react";
import TableRow from "./TableRow";

const TableBody = ({ data, columns, rowClick, selectedRow, onDoubleClick }) => {
  return (
    <tbody className="Body">
      {data.map((item) => (
        <TableRow
          item={item}
          rowClick={rowClick}
          columns={columns}
          onDoubleClick={onDoubleClick}
        />
      ))}
    </tbody>
  );
};

export default TableBody;
