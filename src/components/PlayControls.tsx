import { Play, Pause, SkipBack, SkipForward, Shuffle } from "lucide-react";

interface PlayControlsProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  onNext: () => void;
  onPrev: () => void;
  speed: number;
  onSpeedChange: () => void;
  isShuffle: boolean;
  onShuffle: () => void;
  disablePrev?: boolean;
  disableNext?: boolean;
}

export default function PlayControls({
  isPlaying,
  onPlayPause,
  onNext,
  onPrev,
  speed,
  onSpeedChange,
  isShuffle,
  onShuffle,
  disablePrev = false,
  disableNext = false,
}: PlayControlsProps) {
  return (
    <div className="flex items-center justify-between w-full max-w-md mb-6">
      <button 
        onClick={onSpeedChange}
        className="text-ink-500 hover:text-ink-900 dark:text-ink-400 dark:hover:text-ink-100 font-medium text-sm w-8"
      >
        {speed}x
      </button>
      <button 
        onClick={onPrev}
        disabled={disablePrev}
        className={`text-ink-500 hover:text-ink-900 dark:text-ink-400 dark:hover:text-ink-100 ${disablePrev ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        <SkipBack size={24} />
      </button>
      <button 
        onClick={onPlayPause}
        className="bg-ember-500 text-ember-50 rounded-lg p-4 hover:bg-ember-600 shadow-md dark:bg-ember-600 dark:hover:bg-ember-500 transition-colors"
      >
        {isPlaying ? <Pause size={32} fill="white" /> : <Play size={32} fill="white" />}
      </button>
      <button 
        onClick={onNext}
        disabled={disableNext}
        className={`text-ink-500 hover:text-ink-900 dark:text-ink-400 dark:hover:text-ink-100 ${disableNext ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        <SkipForward size={24} />
      </button>
      <button 
        onClick={onShuffle}
        className={`${isShuffle ? "text-ember-500 dark:text-ember-400" : "text-ink-500 dark:text-ink-400"} hover:text-ink-900 dark:hover:text-ink-100 transition-colors`}
      >
        <Shuffle size={20} />
      </button>
    </div>
  );
}
