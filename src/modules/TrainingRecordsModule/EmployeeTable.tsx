import React from "react";
import Table from "../../components/common/Table/Table";

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
        gridType={null}
        rowClick={onRowClick}
        rowIcons={{ reorder: false, next: false, checkbox: false }}
      />
    </div>
  );
};

export default EmployeeTable;
