import React, { useState } from "react";
import DisplayEntries from "./Componets/DisplayEntries/DisplayEntries";
import AddEntryForm from "./Componets/AddEntry/AddEntryForm";
import EntriesChartTracker from "./Componets/EntriesChartTracker/EntriesChartTracker";

function App() {
  
  const [entries, setEntries] = useState([{ weight: 175, date: "11.22.2023" }, { weight: 176, date: "11.23.2023" }]);

  function addNewEntry(entry){

    let tempEntries = [...entries, entry];

    setEntries(tempEntries);
  }
  return (
    <div className="Contanier-fluid">
      <div className="row">
        <div className="col-md-6">
        <DisplayEntries parentEntries={entries} />
        <AddEntryForm addNewEntryProperty={addNewEntry} />
         </div>
        <div className="col-md-6">

        </div>
        </div>  
     
      <EntriesChartTracker parentEntries={entries} />
    </div>
  );
}

export default App;
