import { BarChart } from '@tremor/react';

const chartdata = [
  {
    name: 'January',
    'Income': 3560,
    'Outcome': 4317,
  },
  {
    name: 'February',
    'Income': 1290,
    'Outcome': 2190,
  },
  {
    name: 'March',
    'Income': 3219,
    'Outcome': 1237,
  },
  {
    name: 'April',
    'Income': 2488,
    'Outcome': 2488,
  },
  {
    name: 'May',
    'Income': 2488,
    'Outcome': 2488,
  },
  {
    name: 'June',
    'Income': 2488,
    'Outcome': 2488,
  },
  {
    name: 'July',
    'Income': 2488,
    'Outcome': 2488,
  },
  {
    name: 'August',
    'Income': 2488,
    'Outcome': 2488,
  },
  {
    name: 'September',
    'Income': 2488,
    'Outcome': 2488,
  },
  {
    name: 'October',
    'Income': 2488,
    'Outcome': 2488,
  },
  {
    name: 'November',
    'Income': 2488,
    'Outcome': 2488,
  },
  {
    name: 'December',
    'Income': 2488,
    'Outcome': 2488,
  },
  {
    name: 'January',
    'Income': 2488,
    'Outcome': 2488,
  },
  {
    name: 'February',
    'Income': 5600,
    'Outcome': 2488,
  },
  {
    name: 'March',
    'Income': 7000,
    'Outcome': 2488,
  },
  {
    name: 'April',
    'Income': 9000,
    'Outcome': 2488,
  },
  {
    name: 'May',
    'Income': 10000,
    'Outcome': 2488,
  },
  {
    name: 'June',
    'Income': 12000,
    'Outcome': 3000,
  },
];

const dataFormatter = (number: number) =>
  Intl.NumberFormat('us').format(number).toString();

export const BarChartHero = () => (
  <BarChart
    data={chartdata}
    index="name"
    categories={['Income', 'Outcome' ]}
   
    className="w-full h-60 border rounded-lg p-2"
    valueFormatter={dataFormatter}
  />
);