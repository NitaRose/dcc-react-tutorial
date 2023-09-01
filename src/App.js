import React, { useState } from 'react';




function App() {


const [ entries, setEntries] = useState([{weight: 175, date: '11.22.2023'}])
  return (

    <div> 
     <table>
      <thead>
        <tr>
          <th>Entry Number</th>
          <th>Weight</th>
          <th>Date</th>
        </tr>
      </thead>
     </table>
    </div>
  );
}

export default App;
