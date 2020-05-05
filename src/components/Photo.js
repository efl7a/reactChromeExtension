import React, { Component } from 'react';
/* global chrome */

import '../scss/main.scss';

class Photo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colorScheme: ''
    }
  }

  componentWillMount() {
    chrome.storage.sync.get(['colorScheme'], (result) => {
      this.setState({ colorScheme: result.colorScheme});
    })
  }

  render() {
    const { photo } = this.props
    return (
      <div
        className="popup"
        style={{backgroundColor: this.state.colorScheme || "#45a29e"}}
        >
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

}

export { Photo };
