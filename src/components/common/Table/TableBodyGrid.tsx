import React, { useState } from "react";
import { CheckboxIcon, NextIcon, ReorderIcon } from "../../../assets/icons";
import WhiteGrid from "../WhiteGrid";

const TableBodyGrid = ({ item, renderCell, columns, gridType, rowIcons }) => {
  const [selectedRow, setSelectedRow] = useState({ _id: null });

  const handleChange = (item) => {
    if (selectedRow._id === item._id) setSelectedRow({ _id: null });
    else setSelectedRow(item);
  };

  return (
    <>
      <tr
        key={item._id}
        className="Row"
        onDoubleClick={() => handleChange(item)}
      >
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
      {selectedRow._id === item._id ? (
        <tr key={12321321321}>
          <td key={12321321322}>
            <WhiteGrid gridType={gridType} />
          </td>
        </tr>
      ) : null}
    </>
  );
};

export default TableBodyGrid;
