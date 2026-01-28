import { Moon, Sun } from "lucide-react";

interface FooterProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Footer({ isDarkMode, toggleDarkMode }: FooterProps) {
  const year = new Date().getFullYear();
  return (
    <div className="flex flex-col items-center gap-4 p-8 w-full">
      <div className="text-center text-ink-500 dark:text-ink-400">
        &copy; {year} Atlas School
      </div>
      {toggleDarkMode && (
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-ocean-100 dark:hover:bg-ink-800 transition-colors text-ink-500 dark:text-ink-400"
          title="Toggle Dark Mode"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      )}
    </div>
  );
}
