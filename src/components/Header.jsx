// src/components/Header.jsx
import './Header.css';

export default function Header({ language, setLanguage }) {
  return (
    <header className="header">
      <h1 className="title">NBA Dashboard</h1>
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
