// File: src/components/StatsOverview.jsx
import './StatsOverview.css';

export default function StatsOverview({ data, labels }) {
  // Assume all data entries have same keys: points, assists, rebounds
  const average = (key) =>
    (data.reduce((acc, val) => acc + val[key], 0) / data.length).toFixed(1);

  return (
    <div className="stats-overview">
      <h3>{labels.selectPlayer} - {labels.lineChartTitle}</h3>
      <div className="stat-cards">
        <div className="card">
          <span className="value">{average('points')}</span>
          <span className="label">{labels.yAxisPoints}</span>
        </div>
        <div className="card">
          <span className="value">{average('assists')}</span>
          <span className="label">{labels.yAxisAssists}</span>
        </div>
        <div className="card">
          <span className="value">{average('rebounds')}</span>
          <span className="label">{labels.yAxisRebounds}</span>
        </div>
      </div>
    </div>
  );
}
