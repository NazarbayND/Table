import React, { FC, useState } from "react";
import "../../../style/Table.scss";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { TableProps } from "../../types/TableTypes";
import TableName from "./TableName";
import { NextIcon, ReorderIcon } from "../../../assets/icons";
import Popup from "../Popup";
import Checkbox from "../Checkbox";
import "../../../style/Popup.scss";

const Table: FC<TableProps> = ({
  data,
  columns,
  tableName,
  rowIcons,
  rowClick,
  onSort,
  popup,
}) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [headerCheck, setHeaderCheck] = useState(false);
  const changedColumns = [
    rowIcons.reorder && {
      path: "reorderIcon",
      label: "",
      content: (item) => <ReorderIcon {...item} />,
    },
    rowIcons.next && {
      path: "nextIcon",
      label: "",
      content: (item) => <NextIcon />,
    },
    rowIcons.checkbox && {
      path: "checkboxIcon",
      labelComponent: () => (
        <Checkbox checked={headerCheck} handleClick={handleAllSelect} />
      ),
      content: (item) => (
        <Checkbox
          checked={status(item)}
          handleClick={() => handleCheckbox(item)}
        />
      ),
    },
    ...columns,
  ];

  const [classes, setClasses] = useState({
    box: "box",
    overlay: "overlay",
    content: "content",
  });

  const handleAllSelect = () => {
    if (!headerCheck) {
      setSelectedItems(
        data.map((item) => {
          return item._id;
        })
      );
    } else setSelectedItems([]);
    setHeaderCheck(!headerCheck);
  };

  const handleCheckbox = (item) => {
    if (selectedItems.includes(item._id)) {
      setSelectedItems(
        selectedItems.filter((i) => {
          return i !== item._id;
        })
      );
      if (headerCheck) setHeaderCheck(!headerCheck);
      return;
    }
    setSelectedItems([...selectedItems, item._id]);
  };

  const status = (item) => {
    if (!item._id) return false;
    if (selectedItems.includes(item._id)) return true;
    return false;
  };

  const onDoubleClick = (item) => {
    if (!popup) return null;
    popup.onOpen(item);
    setClasses({
      box: "box active",
      overlay: "overlay active",
      content: `content ${popup.type}`,
    });
  };

  const handleClose = () => {
    setClasses({
      box: "box",
      overlay: "overlay",
      content: `content ${popup.type}`,
    });
  };

  return (
    <div className="containerTable">
      <TableName tableName={tableName} />

      <table className="mainTable">
        <TableHeader columns={changedColumns} onSort={onSort} />
        <TableBody
          onDoubleClick={onDoubleClick}
          data={data}
          columns={changedColumns}
          rowClick={rowIcons.checkbox ? handleCheckbox : rowClick}
          tableName={tableName}
        />
      </table>
      {popup && (
        <Popup popup={popup} handleClose={handleClose} classes={classes} />
      )}
    </div>
  );
};

export default Table;
