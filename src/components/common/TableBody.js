import React from "react";
import _ from "lodash";

const TableBody = (props) => {
  const { data, columns } = props;
  const renderCell = (item, column) => {
    if (column.content) return column.content(item);
    else return _.get(item, column.path);
  };
  return (
    <tbody className="Body">
      {data.map((item) => (
        <tr key={item._id} className="Row">
          {columns.map((column) => (
            <td className="Data" key={item._id + (column.path || column.key)}>
              {renderCell(item, column)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
