import React, { useEffect } from "react";
import Chart from 'chart.js/auto'
import '../../Asserts/Token.css';

const Token = () => {
  useEffect(() => {
    const ctx = document.getElementById('doughnut');
    const existingChart = Chart.getChart(ctx);

    if (existingChart) {
      existingChart.destroy();
    }

    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ["Apr", "May", "June", "July", "Aug", "Sep"],
        datasets: [{
          label: 'Orders Paid',
          data: [1800, 5000, 420, 940, 4121, 6500],
          backgroundColor: [
            'rgba(255, 99, 132, 0.3)', // Red
            'rgba(54, 162, 235, 0.3)', // Blue
            'rgba(255, 206, 86, 0.3)', // Yellow
            'rgba(75, 192, 192, 0.3)', // Green
            'rgba(153, 102, 255, 0.3)', // Purple
            'rgba(255, 159, 64, 0.3)'  // Orange
          ],
          borderColor: [
            'rgba(255,99,132,1)',   // Red
            'rgba(54, 162, 235, 1)', // Blue
            'rgba(255, 206, 86, 1)', // Yellow
            'rgba(75, 192, 192, 1)', // Green
            'rgba(153, 102, 255, 1)', // Purple
            'rgba(255, 159, 64, 1)'  // Orange
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,

      }
    });

    const bar =  document.getElementById('bar');
    const existchart = Chart.getChart(bar);

    if(existchart){{
      existchart.destroy();
    }}

    new Chart(bar, {
      type: 'bar',
      data: {
        labels: ["Apr", "May", "June", "July", "Aug", "Sep"],
        datasets: [{
          label: 'Tokens Sold',
          data: [1800, 5000, 420, 940, 4121, 6500],
          backgroundColor: [
            'rgba(255, 99, 132, 0.3)', // Red
            'rgba(54, 162, 235, 0.3)', // Blue
            'rgba(255, 206, 86, 0.3)', // Yellow
            'rgba(75, 192, 192, 0.3)', // Green
            'rgba(153, 102, 255, 0.3)', // Purple
            'rgba(255, 159, 64, 0.3)'  // Orange
          ],
          borderColor: [
            'rgba(255,99,132,1)',   // Red
            'rgba(54, 162, 235, 1)', // Blue
            'rgba(255, 206, 86, 1)', // Yellow
            'rgba(75, 192, 192, 1)', // Green
            'rgba(153, 102, 255, 1)', // Purple
            'rgba(255, 159, 64, 1)'  // Orange
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    
  }, []);

  return (
    <div className="graphBox">
      {/* <h1>Tokens</h1> */}
      <div className="token-box">
        <canvas id="doughnut"></canvas>
      </div>
      <div className="token-box">
        <canvas id="bar"></canvas>
      </div>
      <div className="token-box"></div>
    </div>
  );
}

export default Token;
