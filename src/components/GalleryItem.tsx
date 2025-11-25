import React from 'react';
import { Screenshot } from '../constants/Screenshots';

interface GalleryItemProps {
  screenshot: Screenshot;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ screenshot }) => {
  return (
    <div>
      <img
        src={screenshot.src}
        alt={screenshot.alt}
        style={{ width: '100%', aspectRatio: '3 / 2', objectFit: 'cover' }}
      />
    </div>
  );
};

export default GalleryItem;
