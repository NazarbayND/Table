import React from "react";
import "./App.css";
import Records from "./modules/NewTable/Records";
import TrainingRecordsModule from "./modules/TrainingRecordsModule/TrainingRecordsModule";

function App() {
  return (
    <div className="App">
      {/* <TrainingRecordsModule /> */}
      <Records />
    </div>
  );
}

export default App;
