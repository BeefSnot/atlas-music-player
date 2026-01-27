export default function PlayListItem({ title, artist, time, current }) {
  return (
    <div
      className={`flex items-center justify-between mx-auto w-full p-3 rounded-lg cursor-pointer transition-colors group ${current ? "bg-slate-100 shadow-sm" : "hover:bg-slate-50"}`}
    >
      <div className="flex flex-col">
        <span
          className={`font-medium ${current ? "text-slate-900" : "text-slate-700"}`}
        >
          {title || "Painted in Blue"}
        </span>
        <span className="text-sm text-slate-500">
          {artist || "Soul Canvas"}
        </span>
      </div>
      <span className="text-sm text-slate-400 font-mono group-hover:text-slate-600">
        {time || "5:55"}
      </span>
    </div>
  );
}
