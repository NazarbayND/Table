import React from "react";
import TableRow from "./TableRow";

const TableBody = ({ data, columns, gridType, rowClick }) => {
  return (
    <tbody className="Body">
      {data.map((item) => (
        <TableRow
          item={item}
          rowClick={rowClick}
          columns={columns}
          gridType={gridType}
        />
      ))}
    </tbody>
  );
};

export default TableBody;
