import './App.css';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
