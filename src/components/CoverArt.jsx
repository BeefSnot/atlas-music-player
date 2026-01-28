import placeholder from "../assets/placeholder.svg";

export default function CoverArt() {
  return (
    <div className="flex justify-center mb-6 w-full max-w-md">
      <img
        src={placeholder}
        alt="Cover Art"
        className="w-full aspect-square rounded-md object-cover shadow-lg"
      />
    </div>
  );
}
