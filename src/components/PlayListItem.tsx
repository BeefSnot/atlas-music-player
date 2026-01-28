import { PlayListItemProps } from "../types";

const formatDuration = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};

export default function PlayListItem({ title, artist, duration, current, onClick }: PlayListItemProps) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-between mx-auto w-full p-3 rounded-lg cursor-pointer transition-colors group ${current ? "bg-ember-100 dark:bg-ink-800 shadow-sm" : "hover:bg-ocean-50 dark:hover:bg-ink-800/50"}`}
    >
      <div className="flex flex-col">
        <span
          className={`font-medium ${current ? "text-ink-900 dark:text-ink-50" : "text-ink-700 dark:text-ink-200"}`}
        >
          {title}
        </span>
        <span className="text-sm text-ink-500 dark:text-ink-400">
          {artist}
        </span>
      </div>
      <span className="text-sm text-ink-400 dark:text-ink-500 font-mono group-hover:text-ink-600 dark:group-hover:text-ink-300">
        {formatDuration(duration)}
      </span>
    </div>
  );
}
