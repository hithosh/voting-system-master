import * as React from "react";
interface Position{
  positionId:string,
  positionName:string
}
type myState={
  position:Position
 }
type myProps={
}
class PositionPage extends React.Component<myProps,myState> {
  constructor(props:any){
    super(props);
    this.state={
      position:{positionId:"",positionName:""}
    }
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleInputChange=this.handleInputChange.bind(this);
        };

        handleSubmit(event:any){

        }
        handleInputChange(event:any){

        }
  render() {
    return (
      <div >
         <h1>Position Page</h1>
         <form onSubmit={this.handleSubmit}>
         <label>
            Name
            <input
              name="votterId"
              type="text"
              value={this.state.position.positionId}
              onChange={this.handleInputChange}
            />
          </label>
          <br/>
          <label>
            Location
            <input
              name="candidateId"
              type="text"
              value={this.state.position.positionName}
              onChange={this.handleInputChange}
            />
          </label>
          <br/>
         
          <button type="submit">Create position</button>
         </form>
        
      </div>
    );
  }
}

export default PositionPage;