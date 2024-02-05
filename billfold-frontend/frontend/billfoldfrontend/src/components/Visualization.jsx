// import React from 'react'
// import {  Line } from 'react-chartjs-2';
// import { useSelector } from 'react-redux';
// import { LinearScale, CategoryScale, PointElement, LineElement, Title, Tooltip, Legend, Chart as ChartJS } from 'chart.js';
// import Navbar from './Navbar';
// import InvestmentForm from './InvestmentForm';
// import html2pdf from 'html2pdf.js';

// // import { setAmount, setCurrentMonth, setSavings } from '../redux/financeSlice';
// ChartJS.register(
//     LinearScale,
//     CategoryScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend
//     );
    
//     const Visualization = () => {
//         const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        

        
    
//         const financeState = useSelector((state) => state.finance);
//         const investmentState = useSelector((state) => state.investment);
        
//         // console.log(financeState.monthlyAmounts);
//         // console.log('Redux State: ',investmentFormState);
//         console.log("Investment Data: ",investmentState.investedAmount);
//         const data = {
//         labels,
//         datasets: [
//             {
//             label: 'Monthly Savings Amounts',
//             data: financeState.monthlyAmounts,
//             borderColor: 'rgb(255, 99, 132)',
//             backgroundColor: 'rgba(255, 99, 132, 0.5)',
//             },
//         ],
//         };
//         const investmentData = {
//             labels,
//             datasets: [
//                 {
//                 label: 'Investments Amounts',
//                 data:investmentState.investedAmount,
//                 borderColor: 'rgb(255, 99, 132)',
//                 backgroundColor: 'rgba(255, 99, 132, 0.5)',
//                 },
//             ],
//             };
//         const options = {
//         responsive: true,
//         plugins: {
//             legend: {},
//             title: {
//             display: true,
//             text: 'Monthly Savings Chart',
//             },
//         },
//         };

//         const investmentOptions = {
//             responsive: true,
//             plugins: {
//                 legend: {},
//                 title: {
//                 display: true,
//                 text: 'Investment Amount Chart',
//                 },
//             },
//             };
        
    
//         return (
//         <React.Fragment>
//         <Navbar/>
//             <div className='mx-auto w-1/2 chart-data'>
//             <Line options={options} data={data} />
//             </div>
//             {/* <InvestmentForm/> */}
//             {/* <Line options={investmentOptions} data={investmentData} /> */}
//         </React.Fragment>
//         );
//     };
  
// export default Visualization;

// Visualization.jsx
// Visualization.jsx

import React, { useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import html2canvas from 'html2canvas';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import Footer from './Footer';
import Chatbot from './Chatbot';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const Visualization = () => {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const financeState = useSelector((state) => state.finance);

  const chartRefQuarterly = useRef(null);
  const chartRefHalfYearly = useRef(null);
  const chartRefYearly = useRef(null);
  const chartRefMostSaved = useRef(null);

  const quarterlySavings = [
    financeState.monthlyAmounts.slice(0, 3).reduce((total, amount) => total + amount, 0),
    financeState.monthlyAmounts.slice(3, 6).reduce((total, amount) => total + amount, 0),
    financeState.monthlyAmounts.slice(6, 9).reduce((total, amount) => total + amount, 0),
    financeState.monthlyAmounts.slice(9, 12).reduce((total, amount) => total + amount, 0),
  ];

  const halfYearlySavings = [
    financeState.monthlyAmounts.slice(0, 6).reduce((total, amount) => total + amount, 0),
    financeState.monthlyAmounts.slice(6, 12).reduce((total, amount) => total + amount, 0),
  ];

  const yearlySavings = financeState.monthlyAmounts.reduce((total, amount) => total + amount, 0);

  const mostSavedMonthIndex = financeState.monthlyAmounts.indexOf(Math.max(...financeState.monthlyAmounts));

  const chartDataQuarterly = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Quarterly Savings',
        data: quarterlySavings,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const chartDataHalfYearly = {
    labels: ['H1', 'H2'],
    datasets: [
      {
        label: 'Half-Yearly Savings',
        data: halfYearlySavings,
        borderColor: 'rgb(0, 128, 0)',
        backgroundColor: 'rgba(0, 128, 0, 0.5)',
      },
    ],
  };

  const chartDataYearly = {
    labels: ['Year'],
    datasets: [
      {
        label: 'Yearly Savings',
        data: [yearlySavings],
        borderColor: 'rgb(0, 0, 255)',
        backgroundColor: 'rgba(0, 0, 255, 0.5)',
      },
    ],
  };

  const chartDataMostSaved = {
    labels,
    datasets: [
      {
        label: 'Most Saved Month',
        data: mostSavedMonthIndex !== -1 ? [financeState.monthlyAmounts[mostSavedMonthIndex]] : [],
        backgroundColor: 'rgba(255, 165, 0, 0.5)',
        borderColor: 'rgb(255, 165, 0)',
        pointBackgroundColor: 'rgb(255, 165, 0)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 165, 0)',
        pointRadius: 5,
        pointHoverRadius: 8,
        borderWidth: 2,
      },
    ],
  };

  const chartOptionsQuarterly = {
    responsive: true,
    plugins: {
      legend: {},
      title: {
        display: true,
        text: 'Quarterly Savings Chart',
      },
    },
  };

  const chartOptionsHalfYearly = {
    responsive: true,
    plugins: {
      legend: {},
      title: {
        display: true,
        text: 'Half-Yearly Savings Chart',
      },
    },
  };

  const chartOptionsYearly = {
    responsive: true,
    plugins: {
      legend: {},
      title: {
        display: true,
        text: 'Yearly Savings Chart',
      },
    },
  };

  const chartOptionsMostSaved = {
    responsive: true,
    plugins: {
      legend: {},
      title: {
        display: true,
        text: 'Most Saved Month Chart',
      },
    },
  };

  const chartRef = useRef(null);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Monthly Savings Amounts',
        data: financeState.monthlyAmounts,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {},
      title: {
        display: true,
        text: 'Monthly Savings Chart',
      },
    },
  };

  

  const exportToPDF = async () => {

    const chartContainer = chartRef.current;

    // Capture the chart as an image
    const chartImage = await html2canvas(chartContainer);

    // Convert chart image to base64 data URL
    const chartImageDataUrl = chartImage.toDataURL('image/png');

    const tableData = financeState.monthlyAmounts.map((amount, index) => ({
        month: labels[index],
        amount: amount,
      }));

    // Create a PDF document
    const docDefinition = {
      content: [
        {text:'Monthly Saving Report',style:'header'},
        { image: chartImageDataUrl, width: 500 },
        { text: 'Monthly Savings Data Table', style: 'subheader' },
        {
            table: {
              headerRows: 1,
              body: [['Month', 'Saving Amount']].concat(tableData.map(row => [row.month, row.amount])),
            },
            style:'tableStyle'
          },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10],
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 10, 0, 5],
        },
        tableStyle: {
          margin: [0, 15, 0, 15],
          fontSize: 12,
        },
      },
    };

    // Open the PDF in a new window or tab
    pdfMake.createPdf(docDefinition).open();
  };

  const ChartContainer = ({ ref, options, data, label, backgroundColor, borderColor }) => (
    <div className='mx-auto w-1/2 chart-data mt-12 border border-l-amber-800' ref={ref}>
      <Line options={options} data={{ labels: label, datasets: [{  data, borderColor, backgroundColor,label:['Data Points'] }] }} className='bg-gray-100' />
    </div>
    
  );


  const quarterlyLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
  const halfYearlyLabels = ['H1', 'H2'];


  return (
    <React.Fragment>
    <div className='bg-teal-50 min-h-screen '>
    <Navbar />
    <div class="rounded-lg shadow dark:border md:mt-0 sm:max-w-xl xl:p-0 dark:bg-gray-800 dark:border-gray-700 w-1/2 mx-auto bg-teal-200 mt-12">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8  mt-12 mb-12">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-1xl dark:text-white">
                        Note: This is your Saving Chart, based on the amount saved for each month through out the year.
                    </h1>
                    </div>
                    </div>
                    <div className='mx-auto w-1/2 chart-data' ref={chartRef}>
        <Line options={chartOptions} data={chartData} className='bg-gray-100' />
        
      </div> 
      <div class="rounded-lg shadow dark:border md:mt-0 sm:max-w-xl xl:p-0 dark:bg-gray-800 dark:border-gray-700 w-1/2 mx-auto bg-teal-200 mt-12">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8  mt-12 mb-12">
                    <h3 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-1xl dark:text-white">
                        Note: This is your Savings Analysis throughout the year.
                    </h3>
                    <h3 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-xl dark:text-white">
                       Quarterly 
                       ,Half Yearly Analysis
                    </h3>
                    </div>
                    </div>             
                    {[
          { ref: chartRefQuarterly, options: chartOptionsQuarterly, data: quarterlySavings, label: quarterlyLabels, borderColor: 'rgb(255, 99, 132)', backgroundColor: 'rgba(255, 99, 132, 0.5)' },
          { ref: chartRefHalfYearly, options: chartOptionsHalfYearly, data: halfYearlySavings, label: halfYearlyLabels, borderColor: 'rgb(0, 128, 0)', backgroundColor: 'rgba(0, 128, 0, 0.5)' }].map((chart, index) => (
          <ChartContainer key={index} {...chart} />
        ))}


      <div className='w-1/2 mx-auto mt-12'>
    <button className="flex items-center text-xl font-bold leading-tight tracking-tight md:text-2xl dark:text-white text-center justify-center border rounded w-1/2 mx-auto bg-red-400 p-5" onClick={exportToPDF}>
    Export Savings Report
        <img src="https://static.vecteezy.com/system/resources/thumbnails/022/086/609/small_2x/file-type-icons-format-and-extension-of-documents-pdf-icon-free-vector.jpg" width="50px" height="50px" alt='PDF Logo' className="mr-2"  />
        
    </button>
</div>
<Footer/>

       </div>
       <Chatbot/>
       </React.Fragment>
  );
};

export default Visualization;


