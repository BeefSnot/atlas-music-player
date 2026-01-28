import PlayListItem from "./PlayListItem";
import { Song } from "../types";

interface PlaylistProps {
  songs: Song[];
  currentSongId?: string;
  onSongSelect: (song: Song) => void;
}

export default function Playlist({ songs, currentSongId, onSongSelect }: PlaylistProps) {
  return (
    <div className="flex flex-col w-full h-full overflow-y-auto max-h-[600px] pr-2">
      <h3 className="text-ink-900 dark:text-ink-50 font-bold mb-4 text-lg">Playlist</h3>
      <div className="flex flex-col gap-1">
        {songs && songs.length > 0 ? (
          songs.map((song) => (
            <PlayListItem
              key={song.id}
              title={song.title}
              artist={song.artist}
              duration={song.duration}
              current={song.id === currentSongId}
              onClick={() => onSongSelect(song)}
            />
          ))
        ) : (
          <div className="text-ink-400 dark:text-ink-500 p-4 text-center">No songs available</div>
        )}
      </div>
    </div>
  );
}
