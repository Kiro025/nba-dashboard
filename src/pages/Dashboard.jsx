// File: src/pages/Dashboard.jsx
import { useState } from 'react';
import { nbaStatsData } from '../data/nbaStats';
import LineChart from '../components/LineChart';
import BarChart from '../components/BarChart';

export default function Dashboard() {
  const [language, setLanguage] = useState('en');
  const [selectedPlayer, setSelectedPlayer] = useState('LeBron James');
  const [startYear, setStartYear] = useState(2020);
  const [endYear, setEndYear] = useState(2023);
  const [selectedYear, setSelectedYear] = useState(2023);

  const labels = nbaStatsData.i18n[language];
  const playerOptions = nbaStatsData.meta.players;
  const yearOptions = nbaStatsData.meta.availableYears;

  const filteredTimeSeries = nbaStatsData.timeSeries.filter(
    (item) =>
      item.player === selectedPlayer &&
      item.year >= startYear &&
      item.year <= endYear
  );

  const filteredBarData = nbaStatsData.timeSeries
    .filter((item) => item.year === selectedYear)
    .map(({ player, points, assists, rebounds }) => ({ player, points, assists, rebounds }));

  return (
    <div>
      <h2>{labels.dashboardTitle}</h2>

      <div style={{ margin: '20px 0' }}>
        <label>{labels.selectPlayer}: </label>
        <select
          value={selectedPlayer}
          onChange={(e) => setSelectedPlayer(e.target.value)}
        >
          {playerOptions.map((player) => (
            <option key={player} value={player}>
              {player}
            </option>
          ))}
        </select>

        <span style={{ marginLeft: '20px' }}>{labels.language}:</span>
        <button onClick={() => setLanguage('en')} style={{ marginLeft: 8 }}>
          EN
        </button>
        <button onClick={() => setLanguage('fr')} style={{ marginLeft: 4 }}>
          FR
        </button>
      </div>

      <div style={{ margin: '10px 0' }}>
        <label>{labels.yearRange}: </label>
        <select value={startYear} onChange={(e) => setStartYear(Number(e.target.value))}>
          {yearOptions.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <span> - </span>
        <select value={endYear} onChange={(e) => setEndYear(Number(e.target.value))}>
          {yearOptions.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <LineChart
        title={labels.lineChartTitle}
        data={filteredTimeSeries}
        labels={labels}
      />

      <div style={{ margin: '10px 0' }}>
        <label>{labels.selectYear}: </label>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
        >
          {yearOptions.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <BarChart
        title={labels.barChartTitle}
        data={filteredBarData}
        labels={labels}
      />
    </div>
  );
}
