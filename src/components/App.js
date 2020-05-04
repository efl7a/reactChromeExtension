import React, { Component } from 'react';

import { wantedPhotos } from '../images/photo';
import { Photo } from './Photo';
import Popup from './Popup';
import '../scss/main.scss';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      photos: wantedPhotos
    }
  }

  getPhoto = () => {
    let randomNum = Math.floor(Math.random() * Math.floor(this.state.photos.length))
    return this.state.photos[randomNum]
  }

  pageToRender = () => {
    if (this.props.url.includes("index.html?query=popup")) {
      return <Popup />
    } else {
      return <Photo photo={this.getPhoto()} />
    }
  }

  render() {
    return (
      this.pageToRender()
    );
  }
};

export default App;
