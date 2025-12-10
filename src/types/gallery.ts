export type GalleryItemType = "image" | "note";

export type ImageOrientation = "landscape" | "portrait" | "square";

export interface GalleryImage {
  id: string;
  type: "image";
  src: string;
  alt?: string;
  orientation: ImageOrientation;
  accentColor?: "peach" | "yellow" | "green" | "pink";
  createdAt: Date;
}

export interface GalleryNote {
  id: string;
  type: "note";
  content: string;
  accentColor?: "peach" | "yellow" | "green" | "pink";
  createdAt: Date;
}

export type GalleryItem = GalleryImage | GalleryNote;
