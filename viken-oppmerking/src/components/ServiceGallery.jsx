import { useState, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import projectImages from "../data/project-images.json";

export default function ServiceGallery({ category }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [filteredImages, setFilteredImages] = useState([]);
  const [lightboxImages, setLightboxImages] = useState([]);

  useEffect(() => {
    // Filter images by the specified category
    const images = projectImages
      .filter(img => img.categories.includes(category));
      
    setFilteredImages(images);
    
    // Create lightbox image format
    const lightboxImageArray = images.map(img => ({
      src: `/images/projects/fullsize/${img.filename}`,
      alt: img.description,
      title: img.description
    }));
    
    setLightboxImages(lightboxImageArray);
  }, [category]);

  const openLightbox = useCallback((index) => {
    setSelectedImageIndex(index);
    setOpen(true);
  }, []);

  if (filteredImages.length === 0) {
    return null;
  }

  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <h2 className="text-2xl font-bold mb-6">{t("gallery")}</h2>

      {/* Image Grid - 3 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {filteredImages.map((image, index) => (
          <div 
            key={index} 
            className="aspect-video overflow-hidden shadow-md cursor-pointer transition-transform hover:scale-[1.02]"
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