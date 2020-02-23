import React from 'react';
import './Button.css';
import T from 'prop-types';

export default function Button({ onClick }) {
  return (
    <button className="Button" type="button" onClick={onClick}>
      Load more
    </button>
  );
}

Button.propTypes = {
  onClick: T.func.isRequired,
};
