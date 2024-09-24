import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function CustomLabels() {
  return (
    <BarChart
      series={[
        { data: [4, 2, 5, 4, 1], stack: 'A',  color: 'hsl(210, 100%, 35%)'},
        { data: [2, 8, 1, 3, 1], stack: 'A', color: 'hsl(210, 98%, 48%);'},
        { data: [3, 5, 4, 2, 5], stack: 'A', color:'hsl(210, 100%, 80%);'},
      
      ]}
      
      barLabel={(item, context) => {
        if ((item.value ?? 0) > 15) {
          return 'High';
        }
        return context.bar.height < 60 ? null : item.value?.toString();
      }}
      barOptions={{
        barWidth: 50, // Width of bars
        barRadius: 8, // Rounded corners (like clip-path in SVG)
      }}
      height={250}
    />
  );
}