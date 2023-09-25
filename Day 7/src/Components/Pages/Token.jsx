import React, { Fragment } from "react";
import ApexCharts from "apexcharts";
import { useEffect } from "react";
import '../../Asserts/Token.css';

const TokenGraph = () => {
  const chartOptions = {
    chart: {
      type: "area",
      height: "180",
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    colors: ["#1976D2"],
    series: [{ name: "Tokens", data: [18, 50, 42, 94, 41, 65] }],
    dataLabels: { enabled: false },
    stroke: { width: 3, curve: "smooth" },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    xaxis: {
      categories: ["Apr", "May", "June", "July", "Aug", "Sep"],
      axisBorder: { show: false },
      labels: { 
        style: { 
            
            colors: "#f6f6f9", 
            fontFamily: "Poppins" } },
    },
    yaxis: { show: false },
    grid: {
      borderColor: "rgba(0,0,0,0)",
      padding: { top: -30, bottom: -8, left: 12, right: 12 },
    },
    tooltip: {
      enabled: true,
      y: { formatter: (value) => `${value}K` },
      style: { fontFamily: "Poppins" },
    },
    markers: { show: false },
  };

  useEffect(() => {
    const chart = new ApexCharts(document.querySelector("#chart-area"), chartOptions);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <Fragment>
      <div className="token-body">
        <div className="token-card">
          <h2>Tokens Generated</h2>
          <p>By Month</p>
          <div className="pulse"></div>
          <div id="chart-area">
            <div className="chart-grid"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TokenGraph;
