import CoverArt from "./CoverArt";
import PlayControls from "./PlayControls";
import SongTitle from "./SongTitle";
import VolumeControls from "./VolumeControls";
import { Song } from "../types";

interface CurrentlyPlayingProps {
  currentSong: Song | null;
  isPlaying: boolean;
  volume: number;
  speed: number;
  isShuffle: boolean;
  onPlayPause: () => void;
  onNext: () => void;
  onPrev: () => void;
  onVolumeChange: (volume: number) => void;
  onSpeedChange: () => void;
  onShuffle: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export default function CurrentlyPlaying({
  currentSong,
  isPlaying,
  volume,
  speed,
  isShuffle,
  onPlayPause,
  onNext,
  onPrev,
  onVolumeChange,
  onSpeedChange,
  onShuffle,
  isFirst,
  isLast,
}: CurrentlyPlayingProps) {
  if (!currentSong) return null;

  return (
    <div className="flex flex-col items-center w-full">
      <CoverArt coverUrl={currentSong.cover} />
      <SongTitle title={currentSong.title} artist={currentSong.artist} />
      <PlayControls
        isPlaying={isPlaying}
        speed={speed}
        isShuffle={isShuffle}
        onPlayPause={onPlayPause}
        onNext={onNext}
        onPrev={onPrev}
        onSpeedChange={onSpeedChange}
        onShuffle={onShuffle}
        disablePrev={isFirst}
        disableNext={isLast && !isShuffle}
      />
      <VolumeControls volume={volume} onVolumeChange={onVolumeChange} />
    </div>
  );
}

