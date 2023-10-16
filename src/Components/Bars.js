import React,{ useRef} from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { 
  Bar, 
  getElementAtEvent,
} from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


let  bgColors= ['rgb(0,0.1,0,0.1)','rgb(0,0.1,0,0.1)','rgb(0,0.1,0,0.1)','rgb(0,0.1,0,0.1)','rgb(0,0.1,0,0.1)','rgb(0,0.1,0,0.1)','rgb(0,0.1,0,0.1)','rgb(131, 118, 189)','rgb(0,0.1,0,0.1)','rgb(0,0.1,0,0.1)','rgb(0,0.1,0,0.1)','rgb(0,0.1,0,0.1)'];

function Bars() {
  const chartRef = useRef(null);

  const makeChange = (event) =>{
    const {current: chart} = chartRef;
    if(!chart) {
      return;
    }
   const element= getElementAtEvent(chart,event);
    if(!element.length) return;

    const {datasetIndex,index} = element[0];
    data.datasets[datasetIndex].backgroundColor[index]= data.datasets[datasetIndex].backgroundColor[index]==='rgb(0,0.1,0,0.1)'?'rgb(131, 118, 189)':'rgb(0,0.1,0,0.1)';
  }

  const options = {
    responsive: true,
    cornerRaduis: 15,
    scales: {
      x: {
        grid: {
          drawBorder: false,
          display: false
        },
        border: {
          display: false
        }
      },
      y: {
        ticks: {
          display: false,
          beginAtZero: true
        },
        grid: {
          drawBorder: false,
          display: false
        },
        border: {
          display: false
        }
      }
    },
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
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'];
  

  const data = {
    labels,
    datasets: [
      {
        data: [7,6,10,8,9,5,9,10,9.5,8,7,9],
        backgroundColor: bgColors,
      },
    ],
  };

  return (
    <div className='charts'>
      <div className='chart-text'>
      <p className='left'>Overview<br /> Monthly Earning</p>
       <button className='right button-right-side'>Quaterly  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/> </svg></button>
      </div>
      <div className='graph'>
      <Bar updateMode='show' ref={chartRef} onClick={makeChange} options={options} data={data} />
      </div>
    </div>
  );
}

export default Bars;
