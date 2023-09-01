import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

const EntriesChartTracker = (props) => {

    const [chartData, setChartData] = useState ([]);

    useEffect(() => {
        console.log("Running use effect!");
    })

  return (
    <Chart
      chartType="LineChart"
      data={[
        ["Date", "Weight"], ["2022.01.01", 177],
         ["2022.01.02", 176], ["2022.01.03", 178]
      ]}
      width="100%"
      height="400px"
      legendToggle
    />
  );
};

export default EntriesChartTracker;
