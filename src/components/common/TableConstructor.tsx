import React, { useState } from "react";
import "./TableConstructor.scss";
import TableHeader from "./TableHeader";
import _ from "lodash";
import TableBody from "./TableBody";

const TableConstructor = (props) => {
  const { data, columns, tableName } = props;

  const [sortColumn, setSortColumn] = useState({
    path: "",
    order: "asc",
  });
  const [filterColumn, setFilterColumn] = useState({
    column: "",
    filterString: "",
  });

  const onSort = (sortingColumn) => {
    setSortColumn(sortingColumn);
  };
  const onFilter = (filterString, column) => {
    setFilterColumn({ column, filterString });
  };
  const sorted = _.orderBy(data, sortColumn.path, sortColumn.order);
  const filtered = sorted.filter((data) => {
    if (!filterColumn.column || !filterColumn.filterString) return true;
    return data[filterColumn.column].includes(filterColumn.filterString);
  });

  return (
    <div className="containerTable">
      <span className="tableName">{tableName}</span>
      <table className="mainTable">
        <TableHeader
          columns={columns}
          onSort={onSort}
          sortColumn={sortColumn}
          onFilter={onFilter}
          filterColumn={filterColumn}
        />
        <TableBody data={filtered} columns={columns} />
      </table>
    </div>
  );
};

export default TableConstructor;
