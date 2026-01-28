import CoverArt from "./CoverArt";
import PlayControls from "./PlayControls";
import SongTitle from "./SongTitle";
import VolumeControls from "./VolumeControls";

export default function CurrentlyPlaying() {
  return (
    <div className="flex flex-col items-center w-full">
      <CoverArt />
      <SongTitle />
      <PlayControls />
      <VolumeControls />
    </div>
  );
}

