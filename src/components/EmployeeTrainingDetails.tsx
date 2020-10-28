import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import Table from "./common/Table";
import DeleteIcon from "@material-ui/icons/Delete";
import InfoIcon from "@material-ui/icons/Info";

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
    {
      path: "history",
      label: "History",
      content: (data) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <InfoIcon style={{ fontSize: "12px" }} />
        </div>
      ),
    },
    {
      key: "edit",
      content: (data) => <EditIcon style={{ fontSize: "12px" }} />,
    },
    {
      key: "delete",
      content: (data) => <DeleteIcon style={{ fontSize: "12px" }} />,
    },
  ];

  return (
    <div className="employeeTrainingDetails">
      <Table
        tableName="Employee Training Details"
        data={data}
        columns={columns}
        gridType={true}
      />
    </div>
  );
};

export default EmployeeTrainingDetails;
