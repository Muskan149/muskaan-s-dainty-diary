import Masonry from "react-masonry-css";
import { GalleryItem } from "@/types/gallery";
import GalleryImage from "./GalleryImage";
import GalleryNote from "./GalleryNote";

interface GalleryGridProps {
  items: GalleryItem[];
}

const breakpointColumns = {
  default: 3,
  1100: 2,
  700: 1,
};

const GalleryGrid = ({ items }: GalleryGridProps) => {
  return (
    <Masonry
      breakpointCols={breakpointColumns}
      className="flex -ml-6 w-auto"
      columnClassName="pl-6 bg-clip-padding"
    >
      {items.map((item, index) => (
        <div 
          key={item.id} 
          className="mb-6 animate-fade-in"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {item.type === "image" ? (
            <GalleryImage image={item} />
          ) : (
            <GalleryNote note={item} />
          )}
        </div>
      ))}
    </Masonry>
  );
};

export default GalleryGrid;
