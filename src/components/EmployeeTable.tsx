import React from "react";
import TableConstructor from "./common/TableConstructor";

const EmployeeTable = ({ names, onNameChange }) => {
  const tableColumn = [
    {
      path: "name",
      label: "Full Name",
      filter: true,
      content: (data) => (
        <span onClick={() => onNameChange(data)}>{data.name}</span>
      ),
    },
  ];
  return (
    <div className="employeeTable">
      <TableConstructor
        data={names}
        columns={tableColumn}
        tableName="Employee ATE"
      />
    </div>
  );
};

export default EmployeeTable;
