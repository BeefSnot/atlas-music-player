export default function PlayListItem({ title, artist, time, current }) {
  return (
    <div
      className={`flex items-center justify-between mx-auto w-full p-3 rounded-lg cursor-pointer transition-colors group ${current ? "bg-ember-100 dark:bg-ink-800 shadow-sm" : "hover:bg-ocean-50 dark:hover:bg-ink-800/50"}`}
    >
      <div className="flex flex-col">
        <span
          className={`font-medium ${current ? "text-ink-900 dark:text-ink-50" : "text-ink-700 dark:text-ink-200"}`}
        >
          {title || "Painted in Blue"}
        </span>
        <span className="text-sm text-ink-500 dark:text-ink-400">
          {artist || "Soul Canvas"}
        </span>
      </div>
      <span className="text-sm text-ink-400 dark:text-ink-500 font-mono group-hover:text-ink-600 dark:group-hover:text-ink-300">
        {time || "5:55"}
      </span>
    </div>
  );
}
