import React, { useEffect, useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import TableConstructor from "./common/TableConstructor";
import DeleteIcon from "@material-ui/icons/Delete";
import InfoIcon from "@material-ui/icons/Info";

const EmployeeTrainingDetails = ({ data }) => {
  const columns = [
    { path: "next", label: "Next", filter: true },
    { path: "trainer", label: "Trainer", filter: true },
    { path: "delivery", label: "Delivery", filter: true },
    { path: "duration", label: "Duration", filter: true },
    { path: "course", label: "Course", filter: true },
    { path: "description", label: "Description", filter: true },
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
  // const [sorted, setSorted] = useState(data);
  // const handleDelete = (data) => {
  //   const sorting = sorted.filter((item) => item._id !== data._id);
  //   setSorted(sorting);
  // };
  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  return (
    <div className="employeeTrainingDetails">
      <TableConstructor
        tableName="Employee Training Details"
        data={data}
        columns={columns}
      />
    </div>
  );
};

export default EmployeeTrainingDetails;
