import LanguageSwitcher from './LanguageSwitcher';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <h1>NBA Dashboard</h1>
      <LanguageSwitcher />
    </header>
  );
}
