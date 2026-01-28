// Type definitions for the music player application

export interface Song {
  id: string;
  title: string;
  artist: string;
  genre: string;
  duration: number; // in seconds
  cover?: string;
  song?: string; // URL to the audio file
}

export interface PlayListItemProps {
  title: string;
  artist: string;
  duration: number;
  current: boolean;
  onClick: () => void;
}
