import React from 'react'

const DarkModeToggle = () => {
  // TODO: Implement dark mode toggle logic
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  )
}

export default DarkModeToggle
