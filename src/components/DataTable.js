import React, { useState } from "react";
import TableConstructor from "./common/TableConstructor";
import { tableData } from "../data";

const DataTable = () => {
  const columns = [
    { path: "company", label: "Company", filter: true },
    { path: "ticker", label: "Ticker", filter: true  },
    { path: "stockPrice", label: "Price in Stock" , filter: true },
    { path: "timeElapsed", label: "Elapsed Time" , filter: true },
    { key: "delete",
      content: (data) => (
        <button
          className="btn"
          onClick={() => onDelete(data)}
        >
          Delete
        </button>
      ),
    },
  ];
  const [filtered, setFiltered] = useState(tableData);
  const onDelete = (data) => {
    const filtering = filtered.filter((item) => item !== data);
    setFiltered(filtering);
  };

  return (
    <div className="card">
      <TableConstructor tableName="Users" columns={columns} data={filtered} />
    </div>
  );
};

export default DataTable;
