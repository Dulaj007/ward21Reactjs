import React, { useState } from 'react';
import Slider from 'react-slick';
import GalleryItem from '../components/GalleryItem';
import { screenshots } from '../constants/Screenshots';
import Modal from 'react-modal';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

Modal.setAppElement('#root'); 

const Gallery: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="bg-gray-300 dark:bg-black  w-[100%] px-10 overflow-hidden">
      <div className="pb-0 z-11 pt-5 bg-black dark:pb-1">
        <Slider {...settings}>
          {screenshots.map((screenshot, index) => (
            <div key={index} onClick={() => openModal(screenshot.src)} className="cursor-pointer">
              <GalleryItem screenshot={screenshot} />
            </div>
          ))}
        </Slider>
      </div>

      {/* Gradient Separator */}
      <div className="w-50 sm:w-100 pb-5 bg-gradient-to-r from-black via-white/40 to-black mx-auto hidden dark:block"></div>

      {/* Fullscreen Image Modal */}
      {isOpen && selectedImage && (
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          className="fixed mt-10 inset-0 flex items-center justify-center bg-black/90"
          overlayClassName="fixed inset-0 bg-black/70"
        >
          <div className="relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className=" font-montserrat font-bold absolute top-4 right-4 text-white text-2xl bg-black/50 py-3 px-4 rounded-full hover:bg-black/80 transition"
            >
              X
            </button>

            {/* Full Image */}
            <img
              src={selectedImage}
              alt="Full size preview"
              className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
            />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Gallery;
