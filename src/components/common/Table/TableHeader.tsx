import React from "react";
import { CheckboxIcon } from "../../../assets/icons";
import FilterIconComponent from "../FilterIconComponent";

const TableHeader = ({ columns, rowIcons }) => {
  return (
    <thead className="Head">
      <tr className="Row">
        {rowIcons.reorder ? (
          <th className="Data">
            {" "}
            <div className="Content"></div>
          </th>
        ) : null}
        {rowIcons.next ? (
          <th className="Data">
            {" "}
            <div className="Content"></div>
          </th>
        ) : null}
        {rowIcons.checkbox ? (
          <th className="Data">
            {" "}
            <div className="Content">
              <CheckboxIcon />
            </div>
          </th>
        ) : null}
        {columns.map((column) => (
          <th className="Data" key={column.path || column.key}>
            <div className="Content">
              <span className="text">{column.label}</span>
              {column.filter ? <FilterIconComponent /> : null}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
