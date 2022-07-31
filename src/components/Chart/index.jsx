import React, { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from 'chart.js';
import {Chart} from "react-chartjs-2"
import { useAppSelector } from '../../hooks/redux';
import { WordsPerMinute } from '../../utils/Wpm';
import { getTime } from '../../features/TextSlicer';
import { useSelector } from 'react-redux';
import { feelLabels } from '../../utils/FeelLabels';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);




export default function ChartLine() {
  
  
  const mistakes = useAppSelector(state => state.text.mistakes)
  const correctCharacter = useAppSelector(state => state.text.countCorrectCharacters)
  const countCharacter = mistakes+correctCharacter
  const time = useSelector(getTime)
  

  const mistakesArr = useAppSelector(state => state.chart.errors)


   const labels = feelLabels(time);

   const options = {
    plugins:{
      legend:{
        display:false,
      },
      tooltips:{
        enabled:false,
      },
    },
    scales:{
      y: {
        type: 'linear' ,
        display: true,
        position: 'left' ,
        grid: {
          drawOnChartArea: false,
        },
        beginAtZero:true,

      },
      r: {
        type: 'linear' ,
        display: true,
        position: 'right', 
        grid: {
          drawOnChartArea: false,
        },
        beginAtZero:true,
        ticks:{
          stepSize:1,
        }
      },
    }
   }

   const data = {
    labels,
    datasets: [
      
      { type:'line',
        lineTension: 0.2,
        label: 'WPM',
        backgroundColor: '#e2b714',
        data: useAppSelector(state => state.chart.wordsPerMinute).slice(1),
        borderColor:'#e2b714',
        yAxisID: 'y',
        borderWidth:2,
        pointBorderWidth:1,
        pointRadius:2.2,
      },
      {
        pointStyle:'cross',
        borderColor:'#ca4754',
        radius:3,
        rotation:45,
        borderWidth:2,
        type: 'scatter',
        label: 'Mistakes',
        data: mistakesArr.map(mistake => ({x:+(mistake.time).toFixed(),y:+(mistake.error).toFixed()})) ,
        backgroundColor: '#ca4754',
        yAxisID: 'r',
      },
  
    ],
  };

  return (<Chart options={options} type='line' data={data} />);
}
