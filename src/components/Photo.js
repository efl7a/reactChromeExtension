import React from 'react';
/* global chrome */

import '../scss/main.scss';

const Photo = ({ photo }) => {
  return (
    <div className="popup">
      <button
        className="closeButton"
        onClick={() => {
          chrome.tabs.getCurrent(tab => {
            chrome.tabs.update(tab.id, {
              url: 'chrome-search://local-ntp/local-ntp.html',
            });
          });
        }}
        >
        X
      </button>
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
