import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'Now (difference: 0)', actualProfit: 2400, predictedProfit: 2400, difference: 0,
  },
  {
    name: '6m (difference: 2000)', actualProfit: 1000, predictedProfit: 3000, difference: 2000,
  },
  {
    name: '12m (difference: 4000)', actualProfit: 2000, predictedProfit: 6000, difference: 4000,
  },
  {
    name: '18m (difference: 4000)', actualProfit: 3000, predictedProfit: 7000, difference: 4000,
  },
  {
    name: '24m (difference: 5000)', actualProfit: 4000, predictedProfit: 9000, difference: 5000,
  },
  {
    name: '30m (difference: 7000)', actualProfit: 5000, predictedProfit: 12000, difference: 7000,
  },
  {
    name: '36m (difference: 14000)', actualProfit: 6000, predictedProfit: 20000, difference: 14000,
  },
];

export default class Graph extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
      <LineChart
        width={1000}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="predictedProfit" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="actualProfit" stroke="#82ca9d" />
      </LineChart>
    );
  }
}
