import React from "react";
import FilterIcon from "./FilterIcon";

const TableHeader = (props) => {
  const { columns, onSort, sortColumn, onFilter } = props;

  const handleSort = (path) => {
    if (!path) return null;
    const sortingColumn = { ...sortColumn };
    if (sortingColumn.path === path)
      sortingColumn.order = sortingColumn.order === "asc" ? "desc" : "asc";
    else {
      sortingColumn.path = path;
      sortingColumn.order = "asc";
    }
    onSort(sortingColumn);
  };

  const handleFilter = (filter, column) => {
    onFilter(filter, column);
  };

  return (
    <thead className="Head">
      <tr className="Row">
        {columns.map((column) => (
          <th className="Data" key={column.path || column.key}>
            <div className="Content">
              <span className="text" onClick={() => handleSort(column.path)}>
                {column.label}
              </span>
              {column.filter ? (
                <FilterIcon onFilter={handleFilter} column={column.path} />
              ) : null}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
