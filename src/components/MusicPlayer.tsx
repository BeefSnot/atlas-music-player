import { useState, useEffect } from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";
import LoadingSkeleton from "./LoadingSkeleton";
import { Song } from "../types";

export default function MusicPlayer() {
  const [playlist, setPlaylist] = useState<Song[]>([]);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(50);
  const [speed, setSpeed] = useState<number>(1);
  const [isShuffle, setIsShuffle] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch playlist
    fetch("/api/v1/playlist")
      .then((res) => res.json())
      .then((data) => {
        setPlaylist(data);
        if (data.length > 0) {
          setCurrentSong(data[0]);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching playlist:", error);
        setIsLoading(false);
      });
  }, []);

  const handleSongSelect = (song: Song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    if (!currentSong || playlist.length === 0) return;

    if (isShuffle) {
      const randomIndex = Math.floor(Math.random() * playlist.length);
      setCurrentSong(playlist[randomIndex]);
    } else {
      const currentIndex = playlist.findIndex((s) => s.id === currentSong.id);
      if (currentIndex < playlist.length - 1) {
        setCurrentSong(playlist[currentIndex + 1]);
      }
    }
  };

  const handlePrev = () => {
    if (!currentSong || playlist.length === 0) return;
    const currentIndex = playlist.findIndex((s) => s.id === currentSong.id);
    if (currentIndex > 0) {
      setCurrentSong(playlist[currentIndex - 1]);
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
  };

  const handleSpeedChange = () => {
    // Toggle between 0.5x -> 1x -> 2x
    if (speed === 1) setSpeed(2);
    else if (speed === 2) setSpeed(0.5);
    else setSpeed(1);
  };

  const toggleShuffle = () => {
    setIsShuffle(!isShuffle);
  };

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto bg-ember-50 dark:bg-ink-900 rounded-2xl shadow-xl border border-ink-200 dark:border-ink-800 overflow-hidden divide-y divide-ink-200 dark:divide-ink-800 md:divide-y-0 md:divide-x">
      <div className="w-full md:w-1/2 p-6 md:p-8">
        <CurrentlyPlaying
          currentSong={currentSong}
          isPlaying={isPlaying}
          volume={volume}
          speed={speed}
          isShuffle={isShuffle}
          onPlayPause={handlePlayPause}
          onNext={handleNext}
          onPrev={handlePrev}
          onVolumeChange={handleVolumeChange}
          onSpeedChange={handleSpeedChange}
          onShuffle={toggleShuffle}
          isFirst={currentSong && playlist.length > 0 ? playlist[0].id === currentSong.id : true}
          isLast={currentSong && playlist.length > 0 ? playlist[playlist.length - 1].id === currentSong.id : true}
        />
      </div>
      <div className="w-full md:w-1/2 p-6 md:p-8">
        <Playlist
          songs={playlist}
          currentSongId={currentSong?.id}
          onSongSelect={handleSongSelect}
        />
      </div>
    </div>
  );
}
