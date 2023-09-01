import React, { useState } from "react";


const AddEntryForm = (props) => {

    const[weight, setWeight] = useState[0]
    const[date, setDate] = useState[""];

  return (
    <form>
        <label>Weight</label>
        <input type="number" value={weight} />
        <label>Date</label>
        <input type="date" value={date} />
    </form>
  );
};

export default AddEntryForm;
