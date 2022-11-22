import { useEffect, useState } from "react";
import Highcharts from "highcharts/highstock";
import exporting from "highcharts/modules/exporting";
import axios from "axios";

const Test = () => {
  exporting(Highcharts);

  let [ticker, setTicker] = useState(null);

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
    if (!ticker) {
      return;
    }
    Highcharts.setOptions({
      lang: {
        rangeSelectorZoom: "",
      },
    });
    Highcharts.stockChart("container", {
      chart: {
        backgroundColor: {
          linearGradient: [1, 1, 2000, 1],
          stops: [
            [0, "#34495E"],
            [0.1, "#34495E"],
            [0.1, "#7F8C8D"],
            [0.2, "#7F8C8D"],
            [0.2, "#34495E"],
            [0.3, "#34495E"],
            [0.3, "#7F8C8D"],
            [0.4, "#7F8C8D"],
            [0.4, "#34495E"],
            [0.5, "#34495E"],
            [0.5, "#7F8C8D"],
            [0.6, "#7F8C8D"],
            [0.6, "#34495E"],
            [0.7, "#34495E"],
            [0.7, "#7F8C8D"],
            [0.8, "#7F8C8D"],
            [0.8, "#34495E"],
            [0.9, "#34495E"],
            [0.9, "#7F8C8D"],
            [1, "#7F8C8D"],
          ],
        },
      },
      rangeSelector: {
        buttonTheme: {
          // styles for the buttons
          fill: "white",
          stroke: "black",
          "stroke-width": 2,
          r: 0,
          width: 50,
          style: {
            color: "black",
          },
          states: {
            hover: {},
            select: {
              fill: "#5DADE2",
              style: {
                color: "black",
              },
            },
            // disabled: { ... }
          },
        },
        buttons: [
          {
            type: "year",
            count: 1,
            text: "1Y",
            title: "View 1 year",
          },
          {
            type: "year",
            count: 5,
            text: "5Y",
            title: "View 5 years",
          },
          {
            type: "all",
            text: "MAX",
            title: "View all",
          },
        ],
        inputEnabled: false,
      },
      xAxis: {
        type: "category",
        labels: {
          enabled: false,
        },
      },
      yAxis: {
        labels: {
          enabled: false,
          style: {
            color: "white",
          },
        },
      },
      scrollbar: {
        enabled: false,
      },
      navigator: {
        enabled: false,
      },
      legend: {
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 1,
        enabled: true,
        floating: true,
        align: "right",
        x: -40,
        y: -347,
      },
      tooltip: {},
      series: [...ticker.series],
    });
  }, [ticker]);

  return (
    <>
      <div id="container" accessibility="false">
        {!ticker ? <h1>Loading</h1> : null}
      </div>
    </>
  );
};

export default Test;
