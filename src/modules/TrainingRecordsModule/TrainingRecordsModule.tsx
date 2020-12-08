import React, { useState, useEffect } from "react";
import EmployeeTable from "./EmployeeTable";
import EmployeeTrainingDetails from "./EmployeeTrainingDetails";
import "../../style/TrainingRecordsModule.scss";
import names from "../../assets/names";
import EmployeeTablePopup from "./EmployeeTablePopup";
import { sort } from "../../functions/functions";
import Counter from "../../components/counter/counter";
import Table from "../../components/table/Table";

export default function TrainingRecordsModule() {
  const [selectedName, setSelectedName] = useState(names[0].courseDetails);
  const [popupContent, setPopupContent] = useState();
  const [data, setData] = useState(names);
  const [popupData, setPopupData] = useState(names);

  const handleSort = (table, path, order) => {
    if (table === "EmployeeTable") {
      // setData(sort(data, { path, order }));
      return;
    }
    if (table === "EmployeeTrainingDetails") {
      // setSelectedName(sort(selectedName, { path, order }));
      return;
    }
    if (table === "EmployeeTablePopup") {
      // setPopupData(sort(popupData, { path, order }));
      return;
    }
    if (table === "EmployeeTablePopupContent") {
      // setPopupContent(sort(popupContent, { path, order }));
      console.log(popupContent);
      return;
    }
  };

  const handleNameChange = (item) => {
    const name = names.filter((i) => i._id === item._id);
    setSelectedName(name[0].courseDetails);
    console.log("handleNameChangeRendered");
  };
  const handlePopup = (item) => {
    setPopupContent(item.courseDetails);
  };
  useEffect(() => {}, [selectedName, popupContent]);

  return (
    <div className="container">
      <div className="leftSide">
        <EmployeeTable
          data={data}
          onRowClick={(item) => handleNameChange(item)}
          handleSort={(path, order) => handleSort("EmployeeTable", path, order)}
        />
      </div>
      <div className="rightSide">
        <EmployeeTrainingDetails
          data={selectedName}
          handleSort={(path, order) =>
            handleSort("EmployeeTrainingDetails", path, order)
          }
        />
      </div>

      <div className="endSide">
        <EmployeeTablePopup
          data={popupData}
          onPopup={handlePopup}
          popupContent={() => (
            <EmployeeTrainingDetails
              data={popupContent}
              handleSort={(path, order) =>
                handleSort("EmployeeTablePopupContent", path, order)
              }
            />
          )}
          handleSort={(path, order) =>
            handleSort("EmployeeTablePopup", path, order)
          }
        />
      </div>
    </div>
  );
}
