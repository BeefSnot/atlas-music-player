interface SongTitleProps {
  title: string;
  artist: string;
}

export default function SongTitle({ title, artist }: SongTitleProps) {
  return (
    <div className="flex flex-col items-start justify-center mb-6 w-full max-w-md">
      <h1 className="text-3xl font-bold text-ink-900 dark:text-ink-50">{title}</h1>
      <p className="text-lg text-ink-500 dark:text-ink-400">{artist}</p>
    </div>
  );
}
