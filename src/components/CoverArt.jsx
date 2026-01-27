import placeholder from "../assets/placeholder.svg";

export default function CoverArt() {
  return (
    <div className="flex justify-center mb-6">
      <img
        src={placeholder}
        alt="Cover Art"
        className="w-80 h-80 rounded-md object-cover shadow-lg"
      />
    </div>
  );
}
