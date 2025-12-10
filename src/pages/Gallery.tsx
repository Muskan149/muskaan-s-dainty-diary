import GalleryGrid from "@/components/gallery/GalleryGrid";
import { sampleGalleryItems } from "@/data/galleryData";

const Gallery = () => {
  return (
    <div className="page-container">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <h1 className="font-serif text-3xl md:text-4xl font-light tracking-wide">
            Gallery
          </h1>
          <p className="font-sans text-muted-foreground mt-3 text-sm tracking-wide">
            moments, musings, and memories
          </p>
          <div className="w-16 h-px bg-foreground/20 mt-4" />
        </div>
        
        {/* Gallery Grid */}
        <GalleryGrid items={sampleGalleryItems} />
      </div>
    </div>
  );
};

export default Gallery;
