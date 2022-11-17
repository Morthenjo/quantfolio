import { useEffect, useState } from "react";
import Highcharts from "highcharts";
import exporting from "highcharts/modules/exporting";
import axios from "axios";

const Test3 = () => {
  let [data, setData] = useState();
  let [data2, setData2] = useState();
  exporting(Highcharts);

  useEffect(() => {
    axios
      .get(
        "https://data.norges-bank.no/api/data/EXR/M.EUR+USD.NOK.SP?format=sdmx-json&startPeriod=2012-11-04&endPeriod=2022-11-04&locale=en"
      )
      .then((res) => {
        setData(res.data.data);
      });
    axios
      .get(
        "https://data.norges-bank.no/api/data/EXR/M.EUR+USD.NOK.SP?format=sdmx-json&startPeriod=2012-11-04&endPeriod=2022-11-04&locale=en"
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
    // console.log(data.structure.dimensions.observation[0].values[0].start); how to find start date of every tick
    console.log(data.dataSets[0].series);
  }, [data, data2]);

  return (
    <>
      <div id="container" accessibility="false"></div>
    </>
  );
};

export default Test3;
