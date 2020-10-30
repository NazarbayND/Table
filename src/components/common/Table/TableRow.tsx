import React from "react";
import _ from "lodash";
import { CheckboxIcon, NextIcon, ReorderIcon } from "../../../assets/icons";
import WhiteGrid from "../WhiteGrid";

const TableRow = ({
  item,
  rowClick,
  rowIcons,
  columns,
  selectedRow,
  gridType,
}) => {
  const renderCell = (item, column) => {
    if (column.content) return column.content(item);
    else return _.get(item, column.path);
  };
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
      {selectedRow._id === item._id ? (
        <tr key={31}>
          <td key={32}>
            <WhiteGrid gridType={gridType} />
          </td>
        </tr>
      ) : null}
    </tr>
  );
};

export default TableRow;
