import {
    LineChart as ReLineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from 'recharts';
  
  export default function LineChart({ title, data, labels }) {
    return (
      <div style={{ marginBottom: '40px' }}>
        <h3>{title}</h3>
        <ResponsiveContainer width="100%" height={300}>
          <ReLineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="points"
              stroke="#1f77b4"
              name={labels.yAxisPoints}
            />
            <Line
              type="monotone"
              dataKey="assists"
              stroke="#ff7f0e"
              name={labels.yAxisAssists}
            />
            <Line
              type="monotone"
              dataKey="rebounds"
              stroke="#2ca02c"
              name={labels.yAxisRebounds}
            />
          </ReLineChart>
        </ResponsiveContainer>
      </div>
    );
  }
  