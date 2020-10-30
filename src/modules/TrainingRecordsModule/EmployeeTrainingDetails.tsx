import React from "react";
import Table from "../../components/common/Table/Table";

const EmployeeTrainingDetails = ({ data }) => {
  const columns = [
    { path: "next", label: "Next", filter: true },
    { path: "trainer", label: "Trainer", filter: true },
    { path: "delivery", label: "Delivery", filter: true },
    { path: "duration", label: "Duration", filter: true },
    { path: "course", label: "Course", filter: true },
    {
      path: "description",
      label: "Description",
      filter: true,
    },
    { path: "frequency", label: "Frequency", filter: true },
    { path: "last", label: "Last", filter: true },
    { path: "by", label: "By", filter: true },
  ];

  return (
    <div className="employeeTrainingDetails">
      <Table
        rowClick={null}
        tableName="Employee Training Details"
        data={data}
        columns={columns}
        gridType={"medium"}
        rowIcons={{ reorder: true, next: true, checkbox: true }}
      />
    </div>
  );
};

export default EmployeeTrainingDetails;
