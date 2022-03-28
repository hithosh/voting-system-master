import * as React from "react";
interface Polling{
votterId:string,
candidateId:string,
positionId:string
}
type myState={
  polling:Polling
 }
type myProps={
}
class PollingPage extends React.Component<myProps,myState> {
  constructor(props:any){
    super(props);
    this.state={
      polling:{votterId:"",candidateId:"",positionId:""}
    }
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
};
        handleInputChange(event:any) {
          const target = event.target;
          if(target.name=="votterId"){
              this.setState((state)=>({polling:{votterId:event.target.value,candidateId:state.polling.candidateId,
               positionId:state.polling.positionId}}));
          }if(target.name=="candidateId"){
            this.setState((state)=>({polling:{votterId:state.polling.votterId,candidateId:event.target.value,
              positionId:state.polling.positionId}}));
          }else{
            this.setState((state)=>({polling:{votterId:state.polling.votterId,candidateId:state.polling.candidateId,
              positionId:event.target.value}}));
          }
  }
  handleSubmit(event :any){
  }
  render() {
    return (
      <div >
         <h1>Polling Page</h1>
         <form onSubmit={this.handleSubmit}>
         <label>
            Name
            <input
              name="votterId"
              type="text"
              value={this.state.polling.votterId}
              onChange={this.handleInputChange}
            />
          </label>
          <br/>
          <label>
            Location
            <input
              name="candidateId"
              type="text"
              value={this.state.polling.candidateId}
              onChange={this.handleInputChange}
            />
          </label>
          <br/>
          <label>
            PostionID</label>
          <select id="postion-id" 
          value={this.state.polling.positionId} onChange={this.handleInputChange}>
            <option value="1">General Manager</option>
            <option value="2">Project Manager</option>
            <option value="3">Team Lead</option>
          </select>
          <br/>
          <button type="submit">Poll</button>
         </form>
      </div>
    );
  }
}

export default PollingPage;