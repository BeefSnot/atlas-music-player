import PlayListItem from "./PlayListItem";

export default function Playlist() {
  return (
    <div className="flex flex-col w-full">
      <h3 className="text-ink-900 dark:text-ink-50 font-bold mb-4 text-lg">Playlist</h3>
      <div className="flex flex-col gap-1">
        <PlayListItem title="Painted in Blue" artist="Soul Canvas" time="5:55" current={true} />
        <PlayListItem title="Tidal Drift" artist="Echoes of the Sea" time="8:02" />
        <PlayListItem title="Fading Shadows" artist="The Emberlight" time="3:01" />
        <PlayListItem title="Cosmic Drift" artist="Solar Flare" time="5:01" />
        <PlayListItem title="Urban Echoes" artist="City Lights" time="4:54" />
        <PlayListItem title="Night's End" artist="Drawkin" time="9:02" />
        <PlayListItem title="Simple" artist="Wane" time="2:34" />
      </div>
    </div>
  );
}
