export const nbaStatsData = {
    meta: {
      source: "Synthetic dataset generated for academic use",
      lastUpdated: "2025-07-14",
      availableYears: [2020, 2021, 2022, 2023],
      players: ["LeBron James", "Stephen Curry", "Giannis Antetokounmpo", "Luka Dončić"],
    },
  
    // For the line chart — player stats over time
    timeSeries: [
      { player: "LeBron James", year: 2020, points: 25.3, assists: 10.2, rebounds: 7.8 },
      { player: "LeBron James", year: 2021, points: 24.7, assists: 8.3, rebounds: 7.4 },
      { player: "LeBron James", year: 2022, points: 30.1, assists: 7.5, rebounds: 8.2 },
      { player: "LeBron James", year: 2023, points: 28.9, assists: 6.9, rebounds: 7.9 },
  
      { player: "Stephen Curry", year: 2020, points: 32.0, assists: 5.8, rebounds: 5.5 },
      { player: "Stephen Curry", year: 2021, points: 29.5, assists: 6.2, rebounds: 5.1 },
      { player: "Stephen Curry", year: 2022, points: 30.3, assists: 6.8, rebounds: 4.7 },
      { player: "Stephen Curry", year: 2023, points: 27.8, assists: 6.1, rebounds: 5.0 },
  
      { player: "Giannis Antetokounmpo", year: 2020, points: 29.5, assists: 5.6, rebounds: 13.6 },
      { player: "Giannis Antetokounmpo", year: 2021, points: 28.1, assists: 5.9, rebounds: 11.0 },
      { player: "Giannis Antetokounmpo", year: 2022, points: 31.1, assists: 5.7, rebounds: 12.0 },
      { player: "Giannis Antetokounmpo", year: 2023, points: 30.5, assists: 6.2, rebounds: 11.8 },
  
      { player: "Luka Dončić", year: 2020, points: 28.8, assists: 8.8, rebounds: 9.4 },
      { player: "Luka Dončić", year: 2021, points: 27.7, assists: 8.6, rebounds: 8.0 },
      { player: "Luka Dončić", year: 2022, points: 32.4, assists: 8.0, rebounds: 8.6 },
      { player: "Luka Dončić", year: 2023, points: 33.3, assists: 9.1, rebounds: 9.2 },
    ],
  
    // For the bar chart — comparison for a single season
    compare2023: [
      { player: "LeBron James", points: 28.9, assists: 6.9, rebounds: 7.9 },
      { player: "Stephen Curry", points: 27.8, assists: 6.1, rebounds: 5.0 },
      { player: "Giannis Antetokounmpo", points: 30.5, assists: 6.2, rebounds: 11.8 },
      { player: "Luka Dončić", points: 33.3, assists: 9.1, rebounds: 9.2 },
    ],
  
    // Internationalized labels
    i18n: {
      en: {
        dashboardTitle: "NBA Player Statistics Dashboard",
        lineChartTitle: "Performance Over Time",
        barChartTitle: "2023 Player Comparison",
        yAxisPoints: "Points per Game",
        yAxisAssists: "Assists per Game",
        yAxisRebounds: "Rebounds per Game",
        selectPlayer: "Select Player",
        selectYear: "Select Year",
        language: "Language",
        yearRange: "Year Range",
      },
      fr: {
        dashboardTitle: "Tableau de bord des statistiques NBA",
        lineChartTitle: "Performance au fil du temps",
        barChartTitle: "Comparaison des joueurs en 2023",
        yAxisPoints: "Points par match",
        yAxisAssists: "Passes décisives par match",
        yAxisRebounds: "Rebonds par match",
        selectPlayer: "Sélectionner un joueur",
        selectYear: "Sélectionner une année",
        language: "Langue",
        yearRange: "Plage d'années",
      }
    }
  };
  