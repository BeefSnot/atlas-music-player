import { Volume2, Volume1, VolumeX } from "lucide-react";

interface VolumeControlsProps {
  volume: number;
  onVolumeChange: (volume: number) => void;
}

export default function VolumeControls({ volume, onVolumeChange }: VolumeControlsProps) {
  const VolumeIcon = volume === 0 ? VolumeX : volume < 50 ? Volume1 : Volume2;
  
  return (
    <div className="flex items-center w-full max-w-md gap-3 text-ink-500 dark:text-ink-400 mb-6">
      <VolumeIcon size={20} />
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={(e) => onVolumeChange(Number(e.target.value))}
        className="w-full h-1 bg-ink-200 dark:bg-ink-700 rounded-lg appearance-none cursor-pointer accent-ember-500"
      />
    </div>
  );
}
