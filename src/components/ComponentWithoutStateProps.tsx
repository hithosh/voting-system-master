import * as React from "react";

class ComponentWithoutStateProps extends React.Component {
  constructor(props:any){
    super(props);
     };
     render() {
    return (
      <div >
          <h1>Welcome Page</h1>
          <h1>Hello</h1>
      </div>
    );
  }
}

export default (ComponentWithoutStateProps) ;