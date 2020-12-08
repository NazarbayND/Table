import { Button, Card } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../store/trainingRecords/counter";
import WithTooltip from "../tooltip/WithTooltip";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  return (
    <Card style={{ margin: "10px", width: "max-content", padding: "5px" }}>
      <Button onClick={() => dispatch(increment(8))}>+</Button>
      {counter.value}
      <Button onClick={() => dispatch(decrement(1))}>-</Button>

      <WithTooltip content />
    </Card>
  );
};

export default Counter;
