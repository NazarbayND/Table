import React from "react";
import { CheckboxIcon, NextIcon, ReorderIcon } from "../../../assets/icons";

const TableBodyWithoutGrid = ({
  item,
  rowClick,
  columns,
  renderCell,
  rowIcons,
}) => {
  return (
    <tr key={item._id} className="Row" onClick={() => rowClick(item)}>
      {rowIcons.reorder ? (
        <td className="Data">
          <div className="BodyContent">
            <ReorderIcon />
          </div>
        </td>
      ) : null}
      {rowIcons.next ? (
        <td className="Data">
          <div className="BodyContent">
            <NextIcon />
          </div>
        </td>
      ) : null}
      {rowIcons.checkbox ? (
        <td className="Data">
          <div className="BodyContent">
            <CheckboxIcon />
          </div>
        </td>
      ) : null}
      {columns.map((column) => (
        <td className="Data" key={item._id + (column.path || column.key)}>
          <div className="BodyContent">{renderCell(item, column)}</div>
        </td>
      ))}
    </tr>
  );
};

export default TableBodyWithoutGrid;
