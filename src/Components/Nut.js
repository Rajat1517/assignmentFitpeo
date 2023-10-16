import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
const options = {
    responsive: true,
    plugins: {
      legend: {
        display:false,
      },
      title: {
        display: true,
        text: '',
      },

    },
  };
 const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      data:[25,40,35],
      backgroundColor: [
        'rgb(38, 10, 165)',
        'rgb(131, 118, 189)',
        'rgb(0,0.1,0,0.1)',
      ],
     borderWidth: 0,
    },
  ],
};



export default function Nut() {

  return(
    <div id="donut" className='charts'>
      <div className='chart-text'>
      <p className='left'>Customers <br /> Customers that buy products</p>
      </div>
        <div id="center-text">
        <p><b><strong>65%</strong></b><br />Total New <br />Customers</p>
        </div>
        <div id="nut" className='graph'>
        <Doughnut options={options} data={data}/>
        </div>
    </div>
  ) 
}
