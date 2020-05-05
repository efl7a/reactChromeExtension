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

  render() {
    return (
      <div className="iconPopup">
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
    );
  }
};

export default Popup;
