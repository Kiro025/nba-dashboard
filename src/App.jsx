// src/App.jsx
import { useState } from 'react';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';

function App() {
  const [language, setLanguage] = useState('en');

  return (
    <div>
      <Header language={language} setLanguage={setLanguage} />
      <Dashboard language={language} setLanguage={setLanguage} />
    </div>
  );
}

export default App;

