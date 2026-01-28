import { useState, useEffect } from "react";
import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return true;
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="h-full flex flex-col justify-center items-center p-8 min-h-screen bg-ocean-50 dark:bg-ink-950 text-ink-900 dark:text-ink-100 transition-colors duration-200">
      <MusicPlayer />
      <Footer isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

export default App;
