import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const Charts = () => {
  return (
    <>
      <Bar
        className=" m-2 lg:p-3"
        data={{
          labels: ["View", "Subscriptions", "Likes"],
          datasets: [
            {
              label: "Count",
              data: [4000, 1000, 5000],
              backgroundColor: [
                "rgb(55,48,163)",
                "rgb(109,40,217)",
                "rgb(30,27,75)",
              ],
            },
          ],
        }}
      />
    </>
  );
};

export default Charts;
