import React, { useState } from "react";


const AddEntryForm = (props) => {

    const [weight, setWeight] = useState(0);
    const [date, setDate] = useState("");

  return (
    <form>
        <label>Weight</label>
        <input type="number" value={weight} onChange={(event) => setWeight(event.target.value)} />
        <label>Date</label>
        <input type="date" value={date} onChange={(event) => setDate(event.target.value)}/>
    </form>
  );
};

export default AddEntryForm;
