import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photosForGallery } from '../../data/photos-for-gallery'
import PropTypes from 'prop-types';

function PhotosGallery({ producer }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <>
      <Gallery photos={photosForGallery[producer.idPhotoGallery]} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photosForGallery[producer.idPhotoGallery].map(item => ({
                ...item,
                srcset: item.srcSet,
                caption: item.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  );
}

export default PhotosGallery;

PhotosGallery.propTypes = {
  producer: PropTypes.object,
};
