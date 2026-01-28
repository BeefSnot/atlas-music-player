import { Play, SkipBack, SkipForward, Shuffle } from "lucide-react";

export default function PlayControls() {
  return (
    <div className="flex items-center justify-between w-full max-w-md mb-6">
      <button className="text-ink-500 hover:text-ink-900 dark:text-ink-400 dark:hover:text-ink-100 font-medium text-sm">
        1x
      </button>
      <button className="text-ink-500 hover:text-ink-900 dark:text-ink-400 dark:hover:text-ink-100">
        <SkipBack size={24} />
      </button>
      <button className="bg-ember-500 text-ember-50 rounded-lg p-4 hover:bg-ember-600 shadow-md dark:bg-ember-600 dark:hover:bg-ember-500">
        <Play size={32} fill="white" />
      </button>
      <button className="text-ink-500 hover:text-ink-900 dark:text-ink-400 dark:hover:text-ink-100">
        <SkipForward size={24} />
      </button>
      <button className="text-ink-500 hover:text-ink-900 dark:text-ink-400 dark:hover:text-ink-100">
        <Shuffle size={20} />
      </button>
    </div>
  );
}
