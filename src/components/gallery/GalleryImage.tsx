import { GalleryImage as GalleryImageType } from "@/types/gallery";
import { cn } from "@/lib/utils";

interface GalleryImageProps {
  image: GalleryImageType;
}

const orientationClasses = {
  landscape: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
};

const accentBgColors = {
  peach: "bg-accent-peach/20",
  yellow: "bg-accent-yellow/20",
  green: "bg-accent-green/20",
  pink: "bg-accent-pink/20",
};

const GalleryImage = ({ image }: GalleryImageProps) => {
  return (
    <div 
      className={cn(
        "gallery-image overflow-hidden transition-all duration-300 hover:shadow-lg group",
        orientationClasses[image.orientation]
      )}
    >
      {image.src ? (
        <img 
          src={image.src} 
          alt={image.alt || "Gallery image"} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div 
          className={cn(
            "w-full h-full flex items-center justify-center",
            image.accentColor ? accentBgColors[image.accentColor] : "bg-muted"
          )}
        >
          <span className="text-muted-foreground/50 font-sans text-sm">
            {image.alt || "image"}
          </span>
        </div>
      )}
    </div>
  );
};

export default GalleryImage;
