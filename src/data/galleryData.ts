import { GalleryItem } from "@/types/gallery";

// Sample gallery data - this will be replaced with database storage
export const sampleGalleryItems: GalleryItem[] = [
  {
    id: "1",
    type: "note",
    content: "The little things in life are the big things. A cup of chai at sunrise, a handwritten letter, the sound of rain.",
    accentColor: "peach",
    createdAt: new Date("2024-01-15"),
  },
  {
    id: "2",
    type: "image",
    src: "",
    alt: "Morning light through window",
    orientation: "portrait",
    accentColor: "green",
    createdAt: new Date("2024-01-10"),
  },
  {
    id: "3",
    type: "image",
    src: "",
    alt: "Campus at golden hour",
    orientation: "landscape",
    createdAt: new Date("2024-01-08"),
  },
  {
    id: "4",
    type: "note",
    content: "Build things that matter to people. Code with intention. Design with empathy.",
    accentColor: "yellow",
    createdAt: new Date("2024-01-05"),
  },
  {
    id: "5",
    type: "image",
    src: "",
    alt: "Friends and memories",
    orientation: "square",
    accentColor: "pink",
    createdAt: new Date("2024-01-03"),
  },
  {
    id: "6",
    type: "note",
    content: "Home is not a place, it's a feeling. It's the smell of mom's cooking, dad's laughter, and the chaos of family dinners.",
    createdAt: new Date("2024-01-01"),
  },
  {
    id: "7",
    type: "image",
    src: "",
    alt: "Quiet moments",
    orientation: "portrait",
    createdAt: new Date("2023-12-28"),
  },
  {
    id: "8",
    type: "image",
    src: "",
    alt: "City lights",
    orientation: "landscape",
    accentColor: "peach",
    createdAt: new Date("2023-12-25"),
  },
];
