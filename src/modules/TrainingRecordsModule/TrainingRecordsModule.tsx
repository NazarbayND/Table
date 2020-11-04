import React, { useState, useEffect } from "react";
import EmployeeTable from "./EmployeeTable";
import EmployeeTrainingDetails from "./EmployeeTrainingDetails";
import "./TrainingRecordsModule.scss";
import names from "../../assets/names";
import EmployeeTablePopup from "./EmployeeTablePopup";

export default function TrainingRecordsModule() {
  const [selectedName, setSelectedName] = useState(names[0]);
  const [popupContent, setPopupContent] = useState();

  const handleNameChange = (item) => {
    const name = names.filter((i) => i._id === item._id);
    setSelectedName(name[0]);
  };
  const handlePopup = (item) => {
    setPopupContent(item.courseDetails);
  };
  useEffect(() => {}, [selectedName]);

  return (
    <div className="container">
      <div className="leftSide">
        <EmployeeTable
          names={names}
          onRowClick={(item) => handleNameChange(item)}
        />
      </div>
      <div className="rightSide">
        <EmployeeTrainingDetails data={selectedName.courseDetails} />
      </div>
      <div className="endSide">
        <EmployeeTablePopup
          names={names}
          onPopup={handlePopup}
          popupContent={() => <EmployeeTrainingDetails data={popupContent} />}
        />
      </div>
    </div>
  );
}
