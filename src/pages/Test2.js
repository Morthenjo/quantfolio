import { useEffect } from "react";
import Highcharts from "highcharts/highstock";
import exporting from "highcharts/modules/exporting";

const Test2 = () => {
  exporting(Highcharts);
  useEffect(() => {
    Highcharts.getJSON(
      "https://demo-live-data.highcharts.com/aapl-c.json",
      function (data) {
        // Create the chart
        Highcharts.setOptions({
          lang: {
            rangeSelectorZoom: "",
          },
        });
        Highcharts.stockChart("container", {
          chart: {
            backgroundColor: {
              linearGradient: [1, 1, 1400, 1],
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
            labels: {
              enabled: false,
              style: {
                color: "white",
              },
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

          series: [
            {
              name: "AAPL",
              data: data,
              color: "#5DADE2",
              tooltip: {
                valueDecimals: 2,
              },
            },
            {
              name: "bruh",
              data: [
                [1604413800000, 120],
                [1604500200000, 140],
                [1604586600000, 160],
              ],
            },
          ],
        });
      }
    );
  }, []);

  return (
    <>
      <div id="container"></div>
    </>
  );
};

export default Test2;
