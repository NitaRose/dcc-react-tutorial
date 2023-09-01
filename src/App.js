import React, { useState } from "react";
import DisplayEntries from "./Componets/DisplayEntries/DisplayEntries";

function App() {
  const [entries, setEntries] = useState([
    { weight: 175, date: "11.22.2023" },
    { weight: 176, date: "11.23.2023" },
  ]);
  return <div></div>;
}

export default App;
