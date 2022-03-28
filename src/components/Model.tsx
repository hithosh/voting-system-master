import * as React from "react";
import ReactDOM from "react-dom";
const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
    constructor(props :any) {
      super(props);
   
    }
    el=document.createElement('div');

    render() {
      return ReactDOM.createPortal(
        this.props.children,
        this.el
      );
    }
  }
  type myState={
      clicks:number
  }
  class Parent extends React.Component<any,myState> {
    constructor(props :any) {
      super(props);
      this.state = {clicks: 0};
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
       this.setState((state)=>({clicks:(state.clicks + 1)}));

    }
  
    render() {
      return (
        <div onClick={this.handleClick}>
        
          <Modal>
          </Modal>
        </div>
      );
    }
  }
  