// File: src/pages/Dashboard.jsx
import { useState } from 'react';
import { nbaStatsData } from '../data/nbaStats';
import LineChart from '../components/LineChart';
import BarChart from '../components/BarChart';
import StatsOverview from '../components/StatsOverview';
import './Dashboard.css';



export default function Dashboard({ language, setLanguage }) {
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
    <div className="dashboard-container">
  <h2>{labels.dashboardTitle}</h2>

  <div className="controls">
    <label>{labels.selectPlayer}:</label>
    <select value={selectedPlayer} onChange={(e) => setSelectedPlayer(e.target.value)}>
      {playerOptions.map((player) => (
        <option key={player} value={player}>{player}</option>
      ))}
    </select>

    <label>{labels.language}:</label>
    <button onClick={() => setLanguage('en')}>EN</button>
    <button onClick={() => setLanguage('fr')}>FR</button>

    <label>{labels.yearRange}:</label>
    <select value={startYear} onChange={(e) => setStartYear(Number(e.target.value))}>
      {yearOptions.map((year) => (
        <option key={year} value={year}>{year}</option>
      ))}
    </select>
    <span>-</span>
    <select value={endYear} onChange={(e) => setEndYear(Number(e.target.value))}>
      {yearOptions.map((year) => (
        <option key={year} value={year}>{year}</option>
      ))}
    </select>
  </div>
  
  <StatsOverview data={filteredTimeSeries} labels={labels} />

  <div className="chart-card">
    <LineChart title={labels.lineChartTitle} data={filteredTimeSeries} labels={labels} />
  </div>

  <div className="controls">
    <label>{labels.selectYear}:</label>
    <select value={selectedYear} onChange={(e) => setSelectedYear(Number(e.target.value))}>
      {yearOptions.map((year) => (
        <option key={year} value={year}>{year}</option>
      ))}
    </select>
  </div>

  <div className="chart-card">
    <BarChart
    title={`${selectedYear} ${
      language === 'fr' ? 'Comparaison des joueurs' : 'Player Comparison'
    }`}
    data={filteredBarData}
    labels={labels}
    />
  </div>
</div>

  );
}
