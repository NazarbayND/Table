import React, { useState } from "react";
import FilterIconComponent from "../FilterIconComponent";

const TableHeader = ({ columns, onSort }) => {
  const [order, setOrder] = useState();
  const handleSort = (path) => {
    if (order === path) {
      onSort(path, "desc");
      setOrder(null);
      return;
    }
    onSort(path, "asc");
    setOrder(path);
  };
  return (
    <thead className="Head">
      <tr className="Row" key="tableheader">
        {columns.map(
          (column) =>
            column && (
              <th className="Data" key={column.path || column.key}>
                <div className="Content" style={column?.style}>
                  {column.label && (
                    <span
                      className="text"
                      onClick={() => handleSort(column.path)}
                    >
                      {column.label}
                    </span>
                  )}
                  {column.labelComponent && column.labelComponent()}
                  {column.filter && <FilterIconComponent />}
                </div>
              </th>
            )
        )}
      </tr>
    </thead>
  );
};

export default TableHeader;
