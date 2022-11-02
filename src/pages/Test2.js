import { useEffect, useState } from "react";
import Highcharts from "highcharts";
import exporting from "highcharts/modules/exporting";
import axios from "axios";

const Test2 = () => {
  exporting(Highcharts);
  let [data, setData] = useState();
  useEffect(() => {
    axios
      .get(
        "https://api.guildwars2.com/v2/account/raids?access_token=FD56ABDA-723B-8B45-96F7-B56E57558DCA643AAFAF-4889-4EB7-B65E-8F4CC006C050"
      )
      .then((res) => {
        setData(res.data);
        console.log(data);
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
        return (
          <>
            <div id="container"></div>
          </>
        );
      })
      .catch((error) => {
        console.log("error");
        return <h1>ERROR</h1>;
      })
      .finally((done) => {
        return <h1>any day now</h1>;
      });
  }, []);
};

export default Test2;
