import { GalleryNote as GalleryNoteType } from "@/types/gallery";
import { cn } from "@/lib/utils";

interface GalleryNoteProps {
  note: GalleryNoteType;
}

const accentBorderColors = {
  peach: "border-l-accent-peach",
  yellow: "border-l-accent-yellow",
  green: "border-l-accent-green",
  pink: "border-l-accent-pink",
};

const GalleryNote = ({ note }: GalleryNoteProps) => {
  return (
    <div 
      className={cn(
        "gallery-note bg-card border-l-4 transition-all duration-300 hover:shadow-md",
        note.accentColor ? accentBorderColors[note.accentColor] : "border-l-foreground/20"
      )}
    >
      <p className="font-serif text-lg md:text-xl leading-relaxed text-foreground/90 italic">
        "{note.content}"
      </p>
    </div>
  );
};

export default GalleryNote;
