import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
} from "recharts";

const data = [
  { name: "Nhà ở", value: 400 },
  { name: "Đất", value: 500 },
  { name: "Chung cư", value: 200 },
  { name: "Căn hộ", value: 200 },
  { name: "Khách sạn", value: 200 },
  { name: "Villa", value: 200 },
];

const COLORS = ["#264653", "#2a9d8f", "#e9c46a", '#f4a261', '#e76f51', '#ec8c74'];

const AppCircleChart = ({ pieChartData }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
      <Pie
          data={data}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default AppCircleChart;
