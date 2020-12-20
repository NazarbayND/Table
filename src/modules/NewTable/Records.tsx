import React from "react";
import Table from "../../components/table/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  headerChange,
  onHeaderCancel,
  onHeaderSave,
  onDragAndDrop,
} from "../../store/records/records";

const Records = () => {
  const dispatch = useDispatch();
  const records = useSelector((state) => state.records);
  const name = "Employee Training Details";
  return (
    <div>
      <Table
        onDragAndDrop={(data) => dispatch(onDragAndDrop(data))}
        renderOpenUp
        headers={records.headers}
        name={name}
        data={records.data}
        headerSettings={{
          data: records.headersSettings,
          onChange: (header) => {
            dispatch(headerChange(header));
          },
          onSave: () => {
            dispatch(onHeaderSave());
          },
          onCancel: () => {
            dispatch(onHeaderCancel());
          },
        }}
      />
    </div>
  );
};

export default Records;
