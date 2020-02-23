import React from 'react';
import T from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import './ImageGallery.css';

export default function ImageGallery({ images, onClick }) {
  return (
    <ul className="ImageGallery">
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          id={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          onClick={onClick}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: T.arrayOf(Object).isRequired,
  onClick: T.func.isRequired,
};
