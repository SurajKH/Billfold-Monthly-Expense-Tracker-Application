// import React from 'react';
// import { Bar } from 'react-chartjs-2';

// const SavingsChart = ({ data }) => {
//   const months = data.map(entry => entry.month);
//   const savedAmounts = data.map(entry => entry.amount);

//   const chartData = {
//     labels: months,
//     datasets: [
//       {
//         label: 'Saved Amount',
//         backgroundColor: 'rgba(75,192,192,0.2)',
//         borderColor: 'rgba(75,192,192,1)',
//         borderWidth: 1,
//         hoverBackgroundColor: 'rgba(75,192,192,0.4)',
//         hoverBorderColor: 'rgba(75,192,192,1)',
//         data: savedAmounts,
//       },
//     ],
//   };

//   const chartOptions = {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Monthly Savings Chart</h2>
//       <Bar data={chartData} options={chartOptions} />
//     </div>
//   );
// };

// export default SavingsChart;

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const SavingsChart=()=>
{

    const options = {
        responsive: true,
        plugins: {
          legend:{},
          title: {
            display: true,
            text: 'Chart.js Line Chart',
          },
        },
      };

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [2.5,7.8,7,5],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [1,5,4,6,34],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
  return(
    <React.Fragment>
    <div className='mx-auto w-1/2'>
    <Line options={options} data={data} />
    </div>
    </React.Fragment>
  )
};

export default SavingsChart;