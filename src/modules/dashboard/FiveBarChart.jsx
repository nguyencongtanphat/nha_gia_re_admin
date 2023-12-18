import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Cơ bản',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Nâng cao',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Bạch kim',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Đồng',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Kinh cương',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Vàng',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Bạc',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const FiveBarChart = ({ pieChartData }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#026D4D" activeBar={<Rectangle fill="pink" stroke="blue" />} />
    </BarChart>
  </ResponsiveContainer>
  );
};

export default FiveBarChart;
