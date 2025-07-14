// File: src/pages/Dashboard.jsx
import { useState } from 'react';
import { nbaStatsData } from '../data/nbaStats';
import LineChart from '../components/LineChart';
import BarChart from '../components/BarChart';

export default function Dashboard() {
  const [language, setLanguage] = useState('en');
  const [selectedPlayer, setSelectedPlayer] = useState('LeBron James');

  const labels = nbaStatsData.i18n[language];
  const playerOptions = nbaStatsData.meta.players;

  const filteredTimeSeries = nbaStatsData.timeSeries.filter(
    (item) => item.player === selectedPlayer
  );

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

      <LineChart
        title={labels.lineChartTitle}
        data={filteredTimeSeries}
        labels={labels}
      />

      <BarChart
        title={labels.barChartTitle}
        data={nbaStatsData.compare2023}
        labels={labels}
      />
    </div>
  );
}
