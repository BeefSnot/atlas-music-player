import { useEffect, useRef } from "react";
import { Song } from "../types";

interface AudioPlayerProps {
  currentSong: Song | null;
  isPlaying: boolean;
  volume: number;
  speed: number;
  onEnded?: () => void;
}

export default function AudioPlayer({
  currentSong,
  isPlaying,
  volume,
  speed,
  onEnded,
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
    }
  }, [speed]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch((e) => console.error("Play error:", e));
    } else {
      audio.pause();
    }
  }, [isPlaying, currentSong]);

  if (!currentSong || !currentSong.song) return null;

  return (
    <audio
      ref={audioRef}
      src={currentSong.song}
      onEnded={onEnded}
    />
  );
}
