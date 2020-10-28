import React from "react";
import WhiteGrid from "./WhiteGrid";

const TableBodyGrid = ({ item, onClick, renderCell, columns, selectedRow }) => {
  return (
    <>
      <tr key={item._id} className="Row" onClick={() => onClick(item)}>
        {columns.map((column) => (
          <td className="Data" key={item._id + (column.path || column.key)}>
            <div className="BodyContent">{renderCell(item, column)}</div>
          </td>
        ))}
      </tr>
      {selectedRow._id === item._id ? (
        <tr key={12321321321}>
          <td key={12321321322}>
            <WhiteGrid />
          </td>
        </tr>
      ) : null}
    </>
  );
};

export default TableBodyGrid;
