import React from "react";
import Profiles from "./profile/Week3.js";
import KeyHandler, { KEYPRESS } from 'react-key-handler';
import "./styles.css";



//Pressing spacebar to change profiles

class changeProfile extends React.Component {
    constructor() {
      super()
      this.state = {
        showText: true,
        showProfiles: false
      }
      this.onButtonClick = this.onButtonClick.bind(this);
    }
  

    
    onButtonClick(event) {
      event.preventDefault();
      this.setState({
        showText: false,
        showProfiles: true
      });
    }
  
    render() {
      return (
        <React.Fragment>
          <KeyHandler
            keyEventName={KEYPRESS}
            keyValue=" "
            onKeyHandle={this.onButtonClick}
          />
          <div>
            {this.state.showText ? 
            <div>
            <h1>Press Spacebar</h1><span role='img' aria-label='share'>Share = ❤️</span></div> 
            : <Profiles />}
          </div>
        </React.Fragment>
      );
    }
  }

  


export default changeProfile;