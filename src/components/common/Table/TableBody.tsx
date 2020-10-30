import React from "react";
import _ from "lodash";
import TableBodyGrid from "./TableBodyGrid";
import TableBodyWithoutGrid from "./TableBodyWithoutGrid";

const TableBody = ({ data, columns, gridType, rowClick, rowIcons }) => {
  const renderCell = (item, column) => {
    if (column.content) return column.content(item);
    else return _.get(item, column.path);
  };

  return (
    <tbody className="Body">
      {gridType
        ? data.map((item) => (
            <TableBodyGrid
              item={item}
              columns={columns}
              renderCell={renderCell}
              gridType={gridType}
              rowIcons={rowIcons}
            />
          ))
        : data.map((item) => (
            <TableBodyWithoutGrid
              item={item}
              columns={columns}
              renderCell={renderCell}
              rowClick={rowClick}
              rowIcons={rowIcons}
            />
          ))}
    </tbody>
  );
};

export default TableBody;
