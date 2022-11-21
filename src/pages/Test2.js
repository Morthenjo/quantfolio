import { useEffect, useState } from "react";
import Highcharts from "highcharts/highstock";
import exporting from "highcharts/modules/exporting";
import axios from "axios";

const Test2 = () => {
  exporting(Highcharts);

  // let [data, setData] = useState();
  let [data2, setData2] = useState();
  // let [data3, setData3] = useState();
  let AAPLData = [];

  useEffect(() => {
    axios
      .get("https://stockdata.test.quantfolio.dev/ticker/AAPL:NASDAQ/values")
      .then((res) => {
        res.data.forEach((e) => {
          AAPLData.push([Date.parse(e.datetime), parseFloat(e.open)]);
        });
        setData2(AAPLData.reverse());
      });
  }, []);

  useEffect(() => {
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
      // xAxis: {
      //   type: "category",
      //   labels: {
      //     enabled: false,
      //     style: {
      //       color: "white",
      //     },
      //   },
      // },
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

      series: [
        {
          data: data2,
        },
      ],
    });
  }, [data2]);

  return (
    <>
      <div id="container"></div>
    </>
  );
};

export default Test2;
