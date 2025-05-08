function Header({ theme, setTheme }) {
  return (
    <header className="header">
      <p>Header</p>
      <select onChange={(e) => setTheme(e.target.value)} value={theme}>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="light">Light</option>
        <option value="retro">Retro</option>
        <option value="professional">Professional</option>
      </select>
    </header>
  );
}
export default Header;
