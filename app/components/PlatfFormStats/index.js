import { Bar } from "react-chartjs-2";
import { CategoryScale, Tooltip, Legend } from "chart.js";
import { Chart as ChartJS } from "chart.js/auto";

import { useState } from "react";
import styles from "./index.module.css";

// Register necessary componentsd Tooltip, Legend);
ChartJS.register(CategoryScale, Tooltip, Legend);
const index = () => {
  // Sample data
  const data = {
    labels: ["Verified Users", "New Users", "Unverified Users", "Reports"],
    datasets: [
      {
        label: "Platform Snapshot",
        data: [12, 19, 3, 5],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(54, 162, 235, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(54, 162, 235, 0.6)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  return (
    <div className={styles.chartContainer}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default index;
