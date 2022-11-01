const Test = () => {
  let Highcharts = require("highcharts");
  require("highcharts/modules/exporting")(Highcharts);
  document.addEventListener("load", function () {
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
  });
  return (
    <>
      <div id="container"></div>
    </>
  );
};

export default Test;
