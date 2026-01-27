import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";

export default function MusicPlayer() {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto p-4 md:p-8 bg-white rounded-2xl md:shadow-xl md:border md:border-slate-100">
      <CurrentlyPlaying />
      <Playlist />
    </div>
  );
}
