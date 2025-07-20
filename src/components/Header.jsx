// src/components/Header.jsx
import './Header.css';
import nbaLogo from "../assets/nba-logo.svg"

export default function Header({ language, setLanguage }) {
  return (
    <header className="header">
      <div className="logo-title">
        <img src={nbaLogo} alt="NBA Logo" className="nba-logo" />
        <h1 className="title">NBA Dashboard</h1>
      </div>
      <div className="language-switcher">
        <button
          className={language === 'en' ? 'active' : ''}
          onClick={() => setLanguage('en')}
        >
          EN
        </button>
        <button
          className={language === 'fr' ? 'active' : ''}
          onClick={() => setLanguage('fr')}
        >
          FR
        </button>
      </div>
    </header>
  );
}
