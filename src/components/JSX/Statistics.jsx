import React, { PureComponent } from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";
import Banner from "./Banner";

const Statistics = () => {
  const data = [
    { name: "Assignment 1", mark: 57 },
    { name: "Assignment 2", mark: 59 },
    { name: "Assignment 3", mark: 60 },
    { name: "Assignment 4", mark: 59 },
    { name: "Assignment 5", mark: 58 },
    { name: "Assignment 6", mark: 60 },
    { name: "Assignment 7", mark: 60 },
    { name: "Assignment 8", mark: 60 },
  ];
  return (
    <>
      <div className=" flex items-center justify-center">
        <PieChart width={500} height={500}>
          <Pie
            dataKey="mark"
            isAnimationActive={true}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </div>
    </>
  );
};

export default Statistics;
