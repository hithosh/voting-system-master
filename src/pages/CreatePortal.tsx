import React, { Component } from 'react';  
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById("root") as HTMLElement;

export class CreatePortal extends React.Component {
  element: HTMLElement = document.createElement("p");


  componentDidMount() {
    this.element.innerText = "This is a paragraph.";
    modalRoot.appendChild(this.element);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.element);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.element);
  }
}