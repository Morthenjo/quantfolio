import { useEffect, useState } from "react";
import Highcharts from "highcharts";
import exporting from "highcharts/modules/exporting";
import axios from "axios";

const Test = () => {
  let [data, setData] = useState();
  let [data2, setData2] = useState();
  exporting(Highcharts);

  useEffect(() => {
    axios
      .get("https://demo-live-data.highcharts.com/aapl-c.json")
      .then((res) => {
        setData(res.data);
      });
    axios
      .get(
        "https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/usdeur.json"
      )
      .then((res) => {
        setData2(res.data);
      });
  }, []);

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
          name: "AAPL",
          data: data,
        },
        {
          type: "area",
          name: "USD to EUR",
          data: data2,
        },
      ],
    });
  }, [data, data2]);

  return (
    <>
      <div id="container" accessibility="false"></div>
    </>
  );
};

export default Test;
