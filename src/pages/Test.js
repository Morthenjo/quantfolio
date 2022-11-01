const Test = () => {
  var Highcharts = require("highcharts");
  // Load module after Highcharts is loaded
  require("highcharts/modules/exporting")(Highcharts);
  // Create the chart
  Highcharts.chart("container", {
    chart: {
      type: "bar",
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
      <div id="container" style="width:100%; height:400px;"></div>
    </>
  );
};

export default Test;
