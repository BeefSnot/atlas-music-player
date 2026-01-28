import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";

export default function LoadingSkeleton() {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto bg-ember-50 dark:bg-ink-900 rounded-2xl shadow-xl border border-ink-200 dark:border-ink-800 overflow-hidden divide-y divide-ink-200 dark:divide-ink-800 md:divide-y-0 md:divide-x">
      <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col items-center">
        <div className="w-full max-w-md aspect-square bg-ink-200 dark:bg-ink-800 rounded-md animate-pulse mb-6"></div>

        <div className="flex flex-col items-start justify-center mb-6 w-full max-w-md">
          <div className="h-8 w-3/4 bg-ink-200 dark:bg-ink-800 rounded animate-pulse mb-2"></div>
          <div className="h-6 w-1/2 bg-ink-200 dark:bg-ink-800 rounded animate-pulse"></div>
        </div>

        <div className="pointer-events-none opacity-50 w-full flex flex-col items-center">
            <PlayControls 
              isPlaying={false} 
              onPlayPause={() => {}} 
              onNext={() => {}} 
              onPrev={() => {}} 
              speed={1} 
              onSpeedChange={() => {}} 
              isShuffle={false} 
              onShuffle={() => {}}
            />
            <VolumeControls volume={50} onVolumeChange={() => {}} />
        </div>
      </div>

      <div className="w-full md:w-1/2 p-6 md:p-8">
        <h3 className="text-ink-900 dark:text-ink-50 font-bold mb-4 text-lg">Playlist</h3>
        <div className="flex flex-col gap-1">
            {Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className="flex items-center justify-between mx-auto w-full p-3 rounded-lg animate-pulse">
                    <div className="flex flex-col w-3/4">
                        <div className="h-4 w-3/4 bg-ink-200 dark:bg-ink-800 rounded mb-2"></div>
                        <div className="h-3 w-1/2 bg-ink-200 dark:bg-ink-800 rounded"></div>
                    </div>
                    <div className="h-4 w-12 bg-ink-200 dark:bg-ink-800 rounded"></div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
