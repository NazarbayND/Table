import React, { useState } from "react";
import _ from "lodash";
import TableBodyGrid from "./TableBodyGrid";

const TableBody = ({ data, columns, gridType, rowClick }) => {
  const [selectedRow, setSelectedRow] = useState({ _id: null });

  const renderCell = (item, column) => {
    if (column.content) return column.content(item);
    else return _.get(item, column.path);
  };

  const handleChange = (item) => {
    if (selectedRow._id === item._id) setSelectedRow({ _id: null });
    else setSelectedRow(item);
  };

  return (
    <tbody className="Body">
      {gridType
        ? data.map((item) => (
            <TableBodyGrid
              item={item}
              columns={columns}
              onClick={handleChange}
              selectedRow={selectedRow}
              renderCell={renderCell}
            />
          ))
        : data.map((item) => (
            <tr key={item._id} className="Row" onClick={() => rowClick(item)}>
              {columns.map((column) => (
                <td
                  className="Data"
                  key={item._id + (column.path || column.key)}
                >
                  <div className="BodyContent">{renderCell(item, column)}</div>
                </td>
              ))}
            </tr>
          ))}
    </tbody>
  );
};

export default TableBody;
