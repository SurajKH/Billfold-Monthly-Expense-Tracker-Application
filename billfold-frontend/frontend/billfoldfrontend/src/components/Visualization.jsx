import React from 'react'
import {  Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { LinearScale, CategoryScale, PointElement, LineElement, Title, Tooltip, Legend, Chart as ChartJS } from 'chart.js';
import Navbar from './Navbar';
// import { setAmount, setCurrentMonth, setSavings } from '../redux/financeSlice';
ChartJS.register(
    LinearScale,
    CategoryScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
    );
    
    const Visualization = () => {
        const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
        const financeState = useSelector((state) => state.finance);
        console.log(financeState.monthlyAmounts);
        const data = {
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
    
        const options = {
        responsive: true,
        plugins: {
            legend: {},
            title: {
            display: true,
            text: 'Monthly Savings Chart',
            },
        },
        };
    
        return (
        <React.Fragment>
        <Navbar/>
            <div className='mx-auto w-1/2'>
            <Line options={options} data={data} />
            </div>
        </React.Fragment>
        );
    };
  
export default Visualization;
