import { useEffect } from "react";
import Highcharts from "highcharts";
import exporting from "highcharts/modules/exporting";
// import axios from "axios";

const Test = () => {
  exporting(Highcharts);

  useEffect(() => {
    Highcharts.chart("container", {
      chart: {
        type: "line",
      },
      title: {
        text: "Fruit Consumption",
      },
      xAxis: {
        categories: ["Apples", "Bananas", "Oranges"],
      },
      yAxis: {
        title: {
          text: "Fruit eaten",
        },
      },
      series: [
        {
          name: "Jane",
          data: [1, 0, 4],
        },
        {
          name: "John",
          data: [5, 7, 3],
        },
      ],
    });
  }, []);

  return (
    <>
      <div id="container" accessibility="false"></div>
    </>
  );
};

export default Test;
