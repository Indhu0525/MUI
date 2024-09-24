

// const ApexChart = () => {
//   const series = [
//     {
//       name: 'Direct',
//       data: [
//         4184, 4856, 5528, 4184, 6956, 7880, 8552, 9308, 10904, 10904,
//         10232, 12080, 12248, 5528, 13340, 14180, 15020, 5528, 16364, 17036,
//         17708, 18380, 19388, 19724, 7880, 20228, 21488
//       ],
//     },
//     {
//       name: 'Referral',
//       data: [
//         10988, 11408, 11828, 12332, 12752, 13172, 13592, 14096, 14264, 14768,
//     14936, 15188, 16028, 16112, 16868, 16700, 17204, 17120, 17792, 18212,
//     18632, 18968, 19052, 19472, 19892, 20396, 20984,
//       ],
//     },
//     {
//       name: 'Organic',
//       data: [
//         17708, 17876, 18044, 18296, 18464, 18632, 18800, 18968, 19052, 19220,
//     19388, 19556, 19724, 19892, 20060, 20144, 20480, 20648, 20900, 20984,
//     21152, 21320, 21572, 21740, 21908, 21992, 22160
//       ],
//     },
//   ];

//   const options = {
//     chart: {
//       type: 'area',
//       height: 250,
//       width:100,
//       stacked: true,
//       toolbar: {
//         show: false,
//       },
//     },
//     colors: ['#008FFB', '#00E396', '#FEB019'],
//     dataLabels: {
//       enabled: false,
//     },
//     stroke: {
//       curve: 'straight',
//       width: 2,
//     },
//     xaxis: {
//       categories: [0, '', 5, '', 10 ,'',15,'',20,'',25,'',30],
//       labels: {
//         show: true, // Ensure labels are displayed
        
//       },
//     },
//     yaxis: {
//       min: 0,
//       max: 30000,
//       tickAmount: 6, // Control the number of ticks
//       labels: {
//           formatter: (value) => {
//               return [5000, 10000, 15000, 20000, 25000, 30000].includes(value) ? value : '';
//           },
//       },
//   },
//     fill: {
//       type: 'gradient',
//       gradient: {
//         shadeIntensity: 1,
//         opacityFrom: 0.5,
//         opacityTo: 0.8,
//         stops: [0, 100],
//       },
//     },
//     legend: {
//       show: false, // Disable the legend to hide the series names
//     },
//   };

//   return (
//     <Box>
//       <Chart options={options} series={series} type="area" height={250} />
//     </Box>
//   );
// };

// export default ApexChart;
import React from 'react';
import { Box } from '@mui/material';
import Chart from 'react-apexcharts';

const Sessionschart = () => {
  const options = {
    chart: {
      height: 250,
      type: 'area',
      toolbar: {
        show: false, // Disable the toolbar to hide zoom buttons
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ['rgb(40, 146, 253)', 'rgb(54, 162, 235)', 'rgb(40, 146, 253)'], // Updated colors for three series
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    legend: {
      show: false, // Disable the legend to hide the series names
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0.5,
        stops: [0, 150],
      },
    },
    yaxis: {
      min: 0,  // Set the minimum value for the y-axis
      max: 25000, // Set the maximum value for the y-axis (adjust based on your data)
    },
    xaxis: {
      type: 'category', 
      categories: [
        "April 1", 
        "Apr 5", 
        "Apr 10", 
        "Apr 15", 
        "Apr 20", 
        "Apr 25", 
        "Apr 30"
      ],
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
  };

  const series = [
    {
      name: 'Direct',
      data: [
        21488, 20228, 20900, 19388, 19724, 18380, 17036, 17708, 16364, 15692,
        17456, 15020, 14180, 13424, 13340, 12248, 13844, 12080, 10904, 10232,
        10904, 9308, 8552, 7880, 8720, 6956, 6284, 5528, 4856, 4184
      ],
    },
    {
      name: 'Referral',
      data: [
        21740, 20984, 21404, 20396, 20984, 19892, 19052, 19472, 18632,
         18212, 18968, 17792, 17204, 16700, 16868, 16028, 17120, 16112, 15188, 14768, 14936,
          14096, 13592, 13172, 14264, 12752, 12332, 11828, 11408, 10988
      ],
    },
    {
      name: 'Organic',
      data: [
        22160, 21740, 21992, 21572, 21908, 21320, 20984, 21152, 20816, 20648, 20900, 20480, 
        20144, 19892, 19724, 20312, 19724, 20060, 19388, 19220, 19640, 19052, 
        18800, 18632, 18968, 18464, 18296, 18044, 17876, 17708
      ],
    },
  ];

  return (
    <Box>
      <Chart options={options} series={series} type="area" height={250} />
    </Box>
  );
};

export default Sessionschart;

