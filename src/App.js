import React, { useState } from "react";
import DisplayEntries from "./Componets/DisplayEntries/DisplayEntries";
import AddEntryForm from "./Componets/AddEntry/AddEntryForm";

function App() {
  
  const [entries, setEntries] = useState([{ weight: 175, date: "11.22.2023" }, { weight: 176, date: "11.23.2023" }]);

  return (
    <div>
      <DisplayEntries parentEntries={entries} />
      <AddEntryForm />

    </div>
  );
}

export default App;
