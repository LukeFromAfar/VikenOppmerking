import { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import projectImages from "../data/project-images.json";

export default function ProjectGallery() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  // Convert project images to lightbox format
  const lightboxImages = projectImages.map(img => ({
    src: `/images/projects/fullsize/${img.filename}`,
    alt: img.description,
    title: img.description
  }));
  
  const openLightbox = useCallback((index) => {
    setSelectedImageIndex(index);
    setOpen(true);
  }, []);

  return (
    <div>
      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pb-12">
        {projectImages.map((image, index) => (
          <div 
            key={index} 
            className="aspect-video overflow-hidden shadow-md cursor-pointer transition-transform hover:scale-[1.02] rounded-lg"
            onClick={() => openLightbox(index)}
          >
            <img 
              src={`/images/projects/thumbnails/${image.filename}`} 
              alt={image.description} 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={selectedImageIndex}
        slides={lightboxImages}
        plugins={[Thumbnails, Zoom, Fullscreen]}
        thumbnails={{
          position: "bottom",
          width: 120,
          height: 80,
        }}
      />
    </div>
  );
}
