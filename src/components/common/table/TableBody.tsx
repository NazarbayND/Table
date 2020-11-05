import React from "react";
import _ from "lodash";

const TableBody = ({ data, columns, rowClick, onDoubleClick }) => {
  const renderCell = (item, column) => {
    if (column.content) return column.content(item);
    else return _.get(item, column.path);
  };
  let index = 1000;
  const onMouseDown = (event: React.MouseEvent) => {
    if (event.detail > 1) event.preventDefault();
  };
  return (
    <tbody className="Body">
      {data.map((item) => (
        <tr
          key={item._id}
          className="Row"
          onClick={() => (rowClick ? rowClick(item) : null)}
          onDoubleClick={() => onDoubleClick(item)}
        >
          {columns.map(
            (column) =>
              column && (
                <td
                  className="Data"
                  key={column._id || index++}
                  onMouseDown={(e) => onMouseDown(e)}
                >
                  <div className="BodyContent">{renderCell(item, column)}</div>
                </td>
              )
          )}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
