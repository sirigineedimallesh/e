import React from 'react';

interface ProductGalleryProps {
  images: string[];
  title: string;
}

export default function ProductGallery({ images, title }: ProductGalleryProps) {
  const [mainImage, setMainImage] = React.useState(images[0]);

  return (
    <div className="sticky top-4">
      <div className="aspect-square bg-white rounded-lg overflow-hidden mb-4">
        <img src={mainImage} alt={title} className="w-full h-full object-contain" />
      </div>
      <div className="flex gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setMainImage(image)}
            className={`w-20 h-20 border-2 rounded-lg overflow-hidden ${
              mainImage === image ? 'border-[#2874f0]' : 'border-transparent'
            }`}
          >
            <img src={image} alt={`${title} ${index + 1}`} className="w-full h-full object-contain" />
          </button>
        ))}
      </div>
    </div>
  );
}