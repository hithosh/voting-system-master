import {ThemeContext} from './theme-context';
import React, { Component } from 'react';  

class ThemedButton extends React.Component {
  
  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <button
        {...props}
        style={{backgroundColor: theme.background,color:theme.foreground}}
      >Mode </button>
    );
  }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;