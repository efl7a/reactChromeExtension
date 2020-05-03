import React, { Component } from 'react';

import { wantedPhotos } from '../images/photo';
import { Photo } from './Photo';
import '../scss/main.scss';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      photos: wantedPhotos
    };
  }

  getPhoto = () => {
    let randomNum = Math.floor(Math.random() * Math.floor(this.state.photos.length))
    return this.state.photos[randomNum]
  }


  render() {
    return (
      <Photo photo={this.getPhoto()} />
    );
  }
};

export default App;
