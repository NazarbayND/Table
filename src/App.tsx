import React from "react";
import "./App.css";
import Counter from "./components/counter/counter";
import Table from "./components/table/Table";
import TrainingRecordsModule from "./modules/TrainingRecordsModule/TrainingRecordsModule";

function App() {
  const renderOpenUp = () => <Counter />;

  return (
    <div className="App">
      <TrainingRecordsModule />
      <Table renderOpenUp={renderOpenUp} />
    </div>
  );
}

export default App;
