import React from "react";
import Table from "./common/Table";

const EmployeeTable = ({ names, onRowClick }) => {
  const tableColumn = [
    {
      path: "name",
      label: "Full Name",
      filter: true,
    },
  ];
  return (
    <div className="employeeTable">
      <Table
        data={names}
        columns={tableColumn}
        tableName="Employee ATE"
        gridType={false}
        rowClick={onRowClick}
      />
    </div>
  );
};

export default EmployeeTable;
