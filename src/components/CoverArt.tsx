import placeholder from "../assets/placeholder.svg";

interface CoverArtProps {
  coverUrl?: string;
}

export default function CoverArt({ coverUrl }: CoverArtProps) {
  return (
    <div className="flex justify-center mb-6 w-full max-w-md">
      <img
        src={coverUrl || placeholder}
        alt="Cover Art"
        className="w-full aspect-square rounded-md object-cover shadow-lg"
      />
    </div>
  );
}
