
import React, { Component } from 'react';  
import { ThemeContext } from '../theme-context';

class ThemeComponent extends React.Component {
  
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
ThemeComponent.contextType = ThemeContext;

export default ThemeComponent;