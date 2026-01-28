import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";

export default function MusicPlayer() {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto bg-ember-50 dark:bg-ink-900 rounded-2xl shadow-xl border border-ink-200 dark:border-ink-800 overflow-hidden divide-y divide-ink-200 dark:divide-ink-800 md:divide-y-0 md:divide-x">
      <div className="w-full md:w-1/2 p-6 md:p-8">
        <CurrentlyPlaying />
      </div>
      <div className="w-full md:w-1/2 p-6 md:p-8">
        <Playlist />
      </div>
    </div>
  );
}
