import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { statisticsData } from './data';

const StatisticsChart = () => {
  return (
    <BarChart
      width={500}
      height={300}
      data={statisticsData.values.map((value, index) => ({
        name: statisticsData.labels[index],
        value,
      }))}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
  );
}

export default StatisticsChart;
