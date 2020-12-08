import React, { useEffect, useState } from "react";
import _ from "lodash";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const TableBody = ({ data, columns, rowClick, onDoubleClick, tableName }) => {
  const renderCell = (item, column, props) => {
    if (column.path === "reorderIcon") return column.content(props);
    if (column.content) return column.content(item);
    else return _.get(item, column.path);
  };

  const [datas, setDatas] = useState(data);

  useEffect(() => {
    setDatas(data);
  }, [data]);
  let index = 1000;

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(datas);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setDatas(items);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId={tableName}>
        {(provided) => (
          <tbody
            className="Body"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {datas.map((item, index) => (
              <Draggable
                key={item._id}
                draggableId={item._id.toString()}
                index={index}
              >
                {(provided) => (
                  <tr
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    className="Row"
                    onClick={(e) => (rowClick ? rowClick(item) : null)}
                    onDoubleClick={() => onDoubleClick(item)}
                  >
                    {columns.map(
                      (column) =>
                        column && (
                          <td className="Data" key={column._id || index++}>
                            <div className="BodyContent">
                              {renderCell(
                                item,
                                column,
                                provided.dragHandleProps
                              )}
                            </div>
                          </td>
                        )
                    )}
                  </tr>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </tbody>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TableBody;
