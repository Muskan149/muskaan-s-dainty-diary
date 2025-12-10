import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ImageOrientation } from "@/types/gallery";
import { useToast } from "@/hooks/use-toast";
import { Image, FileText, Upload } from "lucide-react";

type AccentColor = "peach" | "yellow" | "green" | "pink" | "none";

const Admin = () => {
  const { toast } = useToast();
  const [itemType, setItemType] = useState<"image" | "note">("note");
  const [noteContent, setNoteContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [orientation, setOrientation] = useState<ImageOrientation>("portrait");
  const [accentColor, setAccentColor] = useState<AccentColor>("none");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // For now, just show a toast - backend integration will come later
    toast({
      title: "Item added to gallery",
      description: "Connect Lovable Cloud to persist gallery items.",
    });

    // Reset form
    setNoteContent("");
    setImageUrl("");
    setImageAlt("");
    setOrientation("portrait");
    setAccentColor("none");
  };

  return (
    <div className="page-container">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <h1 className="font-serif text-3xl md:text-4xl font-light tracking-wide">
            Admin
          </h1>
          <p className="font-sans text-muted-foreground mt-3 text-sm tracking-wide">
            add new items to your gallery
          </p>
          <div className="w-16 h-px bg-foreground/20 mt-4" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8 animate-slide-up">
          {/* Item Type Selection */}
          <div className="space-y-3">
            <Label className="font-sans text-sm tracking-wide">Type</Label>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setItemType("note")}
                className={`flex items-center gap-2 px-4 py-3 rounded-sm border transition-all duration-200 ${
                  itemType === "note"
                    ? "border-foreground bg-foreground text-background"
                    : "border-border hover:border-foreground/50"
                }`}
              >
                <FileText className="w-4 h-4" />
                <span className="font-sans text-sm">Note</span>
              </button>
              <button
                type="button"
                onClick={() => setItemType("image")}
                className={`flex items-center gap-2 px-4 py-3 rounded-sm border transition-all duration-200 ${
                  itemType === "image"
                    ? "border-foreground bg-foreground text-background"
                    : "border-border hover:border-foreground/50"
                }`}
              >
                <Image className="w-4 h-4" />
                <span className="font-sans text-sm">Image</span>
              </button>
            </div>
          </div>

          {/* Note Content */}
          {itemType === "note" && (
            <div className="space-y-3">
              <Label htmlFor="content" className="font-sans text-sm tracking-wide">
                Note Content
              </Label>
              <Textarea
                id="content"
                value={noteContent}
                onChange={(e) => setNoteContent(e.target.value)}
                placeholder="Write your reflection, thought, or lesson learned..."
                className="min-h-[150px] font-serif text-lg resize-none"
              />
            </div>
          )}

          {/* Image Fields */}
          {itemType === "image" && (
            <>
              <div className="space-y-3">
                <Label htmlFor="imageUrl" className="font-sans text-sm tracking-wide">
                  Image URL
                </Label>
                <div className="flex gap-2">
                  <Input
                    id="imageUrl"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="https://..."
                    className="font-sans"
                  />
                  <Button type="button" variant="outline" size="icon" className="shrink-0">
                    <Upload className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Image upload will be available with Lovable Cloud
                </p>
              </div>

              <div className="space-y-3">
                <Label htmlFor="imageAlt" className="font-sans text-sm tracking-wide">
                  Description (optional)
                </Label>
                <Input
                  id="imageAlt"
                  value={imageAlt}
                  onChange={(e) => setImageAlt(e.target.value)}
                  placeholder="A brief description of the image..."
                  className="font-sans"
                />
              </div>

              <div className="space-y-3">
                <Label className="font-sans text-sm tracking-wide">Orientation</Label>
                <RadioGroup
                  value={orientation}
                  onValueChange={(value) => setOrientation(value as ImageOrientation)}
                  className="flex gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="portrait" id="portrait" />
                    <Label htmlFor="portrait" className="font-sans text-sm cursor-pointer">
                      Portrait
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="landscape" id="landscape" />
                    <Label htmlFor="landscape" className="font-sans text-sm cursor-pointer">
                      Landscape
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="square" id="square" />
                    <Label htmlFor="square" className="font-sans text-sm cursor-pointer">
                      Square
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </>
          )}

          {/* Accent Color */}
          <div className="space-y-3">
            <Label className="font-sans text-sm tracking-wide">Accent Color (optional)</Label>
            <div className="flex gap-3">
              {(["none", "peach", "yellow", "green", "pink"] as AccentColor[]).map((color) => (
                <button
                  key={color}
                  type="button"
                  onClick={() => setAccentColor(color)}
                  className={`w-10 h-10 rounded-full border-2 transition-all duration-200 ${
                    accentColor === color ? "border-foreground scale-110" : "border-transparent"
                  } ${
                    color === "none"
                      ? "bg-muted"
                      : color === "peach"
                      ? "bg-accent-peach"
                      : color === "yellow"
                      ? "bg-accent-yellow"
                      : color === "green"
                      ? "bg-accent-green"
                      : "bg-accent-pink"
                  }`}
                  title={color}
                />
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full font-sans tracking-wide">
            Add to Gallery
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
