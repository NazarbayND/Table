import React, { useState } from "react";
import _ from "lodash";
import WhiteGrid from "../WhiteGrid";

const TableRow = ({ item, rowClick, columns, gridType }) => {
  const renderCell = (item, column) => {
    if (column.content) return column.content(item);
    else return _.get(item, column.path);
  };
  const [selectedRow, setSelectedRow] = useState({ _id: null });

  const onDoubleClick = (item) => {
    if (!gridType) return null;
    if (selectedRow._id === item._id) setSelectedRow({ _id: null });
    else setSelectedRow(item);
  };
  return (
    <>
      <tr
        key={item._id}
        className="Row"
        onClick={() => (rowClick ? rowClick(item) : null)}
        onDoubleClick={() => onDoubleClick(item)}
      >
        {columns.map(
          (column) =>
            column && (
              <td className="Data" key={item._id + (column.path || column.key)}>
                <div className="BodyContent">{renderCell(item, column)}</div>
              </td>
            )
        )}
      </tr>
      {selectedRow._id === item._id ? (
        <tr key={item._id + "50ea2986-8630-4b83-b85a-44a23b5138f2"}>
          <td key={item._id + "e52fdc09-d2d1-4035-9602-3272da858aa4"}>
            <WhiteGrid gridType={gridType} />
          </td>
        </tr>
      ) : null}
    </>
  );
};

export default TableRow;
