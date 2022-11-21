import { useEffect, useState } from "react";
import Highcharts from "highcharts";
import exporting from "highcharts/modules/exporting";
import axios from "axios";

const Test = () => {
  exporting(Highcharts);

  useEffect(() => {}, []);

  useEffect(() => {
    Highcharts.chart("container", {
      chart: {},
      title: {
        text: "",
      },
      xAxis: {
        type: "datetime",
      },
      yAxis: {
        title: {
          text: "Exchange Rate",
        },
      },
      series: [
        {
          name: "yo",
          data: 3,
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
