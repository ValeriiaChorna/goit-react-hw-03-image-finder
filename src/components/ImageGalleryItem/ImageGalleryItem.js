import React from 'react';
import T from 'prop-types';
import './ImageGalleryItem.css';

export default function ImageGalleryItem({
  id,
  webformatURL,
  largeImageURL,
  tags,
  onClick,
}) {
  return (
    <li
      id={id}
      className="ImageGalleryItem"
      onClick={() => onClick(largeImageURL)}
    >
      <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  id: T.number.isRequired,
  webformatURL: T.string.isRequired,
  largeImageURL: T.string.isRequired,
  tags: T.string.isRequired,
  onClick: T.func.isRequired,
};
