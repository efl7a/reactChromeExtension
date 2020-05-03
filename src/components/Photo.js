import React from 'react';

import '../scss/main.scss';

const Photo = ({ photo }) => {
  return (
    <div className="popup">
      <div className="imgContainer">
        <img
          className="motivationalImage"
          alt="Something nice"
          src={photo.src.landscape}
        />
      </div>
      <div className="photoInfoContainer">
        <a
          className="photoInfo"
          href={photo.url}
          >
          By {photo.photographer} at pexels.com
        </a>
      </div>
    </div>
  )
}

export { Photo };
