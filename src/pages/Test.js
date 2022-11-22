import { useEffect, useState } from "react";
import Highcharts from "highcharts";
import exporting from "highcharts/modules/exporting";
import axios from "axios";

const Test = () => {
  exporting(Highcharts);

  let [ticker, setTicker] = useState([]);

  let data = [];

  useEffect(() => {
    axios.get("https://stockdata.test.quantfolio.dev/ticker").then((resp) => {
      resp.data.tickers.forEach((e) => {
        axios
          .get(`https://stockdata.test.quantfolio.dev/ticker/${e}`)
          .then((res) => {
            const reversed = res.data.values
              .map((el) => {
                return [Date.parse(el.datetime), parseFloat(el.open)];
              })
              .reverse();
            data.push({
              name: `${res.data.meta.symbol}`,
              data: reversed,
            });
          })
          .then(() => {
            setTicker({
              ...ticker,
              series: data,
            });
          });
      });
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
          text: "Value",
        },
      },
      series: [
        ticker.forEach({
          name: ticker.series.name,
          data: ticker.series.data,
        }),
      ],
    });
    console.log(ticker);
  }, [ticker]);

  return (
    <>
      <div id="container" accessibility="false"></div>
    </>
  );
};

export default Test;
