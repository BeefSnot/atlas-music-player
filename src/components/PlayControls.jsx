import { Play, SkipBack, SkipForward, Shuffle } from "lucide-react";

export default function PlayControls() {
  return (
    <div className="flex items-center justify-between w-full max-w-md mb-6">
      <button className="text-slate-500 hover:text-slate-900 font-medium text-sm">
        1x
      </button>
      <button className="text-slate-500 hover:text-slate-900">
        <SkipBack size={24} />
      </button>
      <button className="bg-slate-900 text-white rounded-full p-4 hover:bg-slate-700 shadow-md">
        <Play size={32} fill="white" />
      </button>
      <button className="text-slate-500 hover:text-slate-900">
        <SkipForward size={24} />
      </button>
      <button className="text-slate-500 hover:text-slate-900">
        <Shuffle size={20} />
      </button>
    </div>
  );
}
