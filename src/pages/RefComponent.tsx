import React, { Component } from 'react';  

class RefCompoenent extends React.Component {
    private stepInput: React.RefObject<HTMLInputElement>;
    constructor(props:any) {
        super(props);
        this.stepInput = React.createRef();
    }
    render() {
        return <input type="text" ref={this.stepInput} />;
    }
}
export default RefCompoenent;