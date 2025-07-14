import {
    BarChart as ReBarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from 'recharts';
  
  export default function BarChart({ title, data, labels }) {
    return (
      <div>
        <h3>{title}</h3>
        <ResponsiveContainer width="100%" height={300}>
          <ReBarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="player" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="points" fill="#1f77b4" name={labels.yAxisPoints} />
            <Bar dataKey="assists" fill="#ff7f0e" name={labels.yAxisAssists} />
            <Bar dataKey="rebounds" fill="#2ca02c" name={labels.yAxisRebounds} />
          </ReBarChart>
        </ResponsiveContainer>
      </div>
    );
  }
  