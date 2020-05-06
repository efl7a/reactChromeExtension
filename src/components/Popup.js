import React, { Component } from 'react';
/* global chrome */

import '../scss/main.scss';
import icon from '../images/dog128.png';

class Popup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: ''
    }
  }

  updateCSS = (event) => {
    console.log('Trying to save settings ', this.state.userInput);
    chrome.storage.sync.set({'colorScheme': this.state.userInput}, function() {
          // Notify that we saved.
          console.log('Settings saved');
        });
    event.preventDefault();
  }

  handleChange = (event) => {
    this.setState({userInput: event.target.value});
  }

  displayFavorites = () => {
    const FAVORITES = ["#45a29e", "#E27D60", "#659DBD", "#2F2FA2", "#5D5C61", "#B1A296"];
    return FAVORITES.map((code) => {return (<button className="colorSwatch" onClick={() => this.setState({userInput: code})} style={{backgroundColor: code}} key={code}>{code}</button>)});
  }

  render() {
    return (
      <div className="iconPopup">
        <div className="topBar">
          <img
            className="extensionIcon"
            alt="icon"
            src={icon}
          />
          <form
            className="userForm"
            onSubmit={this.updateCSS}
            >
            <input
              type="text"
              value={this.state.userInput}
              onChange={this.handleChange}
              placeholder="Input hex code"
            />
          </form>
        </div>
        <div className="colorSwatchContainer">
          {this.displayFavorites()}
        </div>
      </div>
    );
  }
};

export default Popup;
