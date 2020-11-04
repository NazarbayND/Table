import React from "react";
import _ from "lodash";

const TableRow = ({ item, rowClick, columns, onDoubleClick }) => {
  const renderCell = (item, column) => {
    if (column.content) return column.content(item);
    else return _.get(item, column.path);
  };
  let index = 134321;

  return (
    <tr
      key={item._id + index++}
      className="Row"
      onClick={() => (rowClick ? rowClick(item) : null)}
      onDoubleClick={() => onDoubleClick(item)}
    >
      {columns.map(
        (column) =>
          column && (
            <td
              className="Data"
              key={item._id + column.path || column.key + index++}
            >
              <div className="BodyContent">{renderCell(item, column)}</div>
            </td>
          )
      )}
    </tr>
  );
};

export default TableRow;
