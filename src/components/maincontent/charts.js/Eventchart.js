import React,{useState} from 'react';
import { Box } from '@mui/material';
import ReactApexChart from 'react-apexcharts';

const Eventchart = () => {
    const [optionsSpark3] = useState({
      series: [{
        data: [200, 24, 220, 260, 240, 380, 100, 240, 280, 240, 300, 340, 320, 360, 340, 380, 360, 400, 380, 420, 400, 640, 340, 460, 440, 480, 460, 800, 880, 920] // Sample data points
      }],
      chart: {
        type: 'area',
        height: 50,
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        curve: 'smooth',
        width: 2,
    
      },
      colors: ['rgb(187, 194, 209);'],
      tooltip: {
          enabled: true 
      },

      fill: {
        opacity: 0.1,
      },
      yaxis: {
        min: 0,
      }
    });
  
    return (
      <Box >
        <ReactApexChart
          options={optionsSpark3}
          series={optionsSpark3.series}
          type="area"
          height={50}
        />
      </Box>
    );
  };
  
  export default Eventchart;