import React from "react";
import FilterIconComponent from "../FilterIconComponent";

const TableHeader = ({ columns }) => {
  return (
    <thead className="Head">
      <tr className="Row">
        {columns.map(
          (column) =>
            column && (
              <th className="Data" key={column.path || column.key}>
                <div className="Content">
                  {column.label && <span className="text">{column.label}</span>}
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
