import { Volume2 } from "lucide-react";

export default function VolumeControls() {
  return (
    <div className="flex items-center w-full max-w-md gap-3 text-ink-500 dark:text-ink-400 mb-6">
      <Volume2 size={20} />
      <input
        type="range"
        min="0"
        max="100"
        className="w-full h-1 bg-ink-200 dark:bg-ink-700 rounded-lg appearance-none cursor-pointer accent-ember-500"
      />
    </div>
  );
}
