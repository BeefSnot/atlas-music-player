import { Volume2 } from "lucide-react";

export default function VolumeControls() {
  return (
    <div className="flex items-center w-full max-w-md gap-3 text-slate-500 mb-6">
      <Volume2 size={20} />
      <input
        type="range"
        min="0"
        max="100"
        className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
      />
    </div>
  );
}
