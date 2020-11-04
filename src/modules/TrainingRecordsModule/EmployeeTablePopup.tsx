import React from "react";
import Table from "../../components/common/table/Table";

const EmployeeTablePopup = ({ names, onPopup, popupContent }) => {
  const tableColumn = [
    {
      path: "name",
      label: "Full Name",
      filter: true,
      style: {
        width: "150px",
      },
    },
  ];
  return (
    <div className="employeeTable">
      <Table
        data={names}
        columns={tableColumn}
        tableName="Employee ATE"
        popup={{
          type: "xlarge",
          content: popupContent,
          onOpen: onPopup,
          style: {
            display: "flex",
            justifyContent: "center",
          },
        }}
        rowIcons={{ reorder: false, next: false, checkbox: false }}
      />
    </div>
  );
};

export default EmployeeTablePopup;
