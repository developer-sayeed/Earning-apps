import {
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Pie,
} from "recharts";

const data = [
  { name: "January", Deposit: 500 },
  { name: "February", Deposit: 145, Payout: 230 },
  { name: "March", Deposit: 100, Payout: 345 },
  { name: "April", Deposit: 8, Payout: 450 },
  { name: "May", Deposit: 1500, Payout: 321 },
  { name: "June", Deposit: 1100, Payout: 321 },
  { name: "July", Deposit: 1070, Payout: 321 },
  { name: "August", Deposit: 1900, Payout: 321 },
  { name: "September", Deposit: 7100, Payout: 6500 },
  { name: "October", Deposit: 1080, Payout: 321 },
  { name: "November", Deposit: 1090, Payout: 321 },
  { name: "December", Deposit: 1000, Payout: 321 },
];

export const ChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height={500}>
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
        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: "40px" }} />
        <ReferenceLine y={1} stroke="#000" />
        <Brush dataKey="name" height={30} stroke="#8884d8" />
        <Bar dataKey="Payout" fill="#8884d8" />
        <Bar dataKey="Deposit" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

// Pie chart

const PieChartdata = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
];
export const PieChart = () => {
  <ResponsiveContainer width="100%" height="300px">
    <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        startAngle={180}
        endAngle={0}
        data={PieChartdata}
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label
      />
    </PieChart>
  </ResponsiveContainer>;
};
