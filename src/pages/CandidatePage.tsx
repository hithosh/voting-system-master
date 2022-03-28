import * as React from "react";
import { connect } from 'react-redux'
import { loginAction } from "../redux/actions/LoginAction";
import store from "../redux/store";

interface candidate{
  id:number,  // auto generate
  name:string,
  positionId:number,
  location:string
}
type candidateState={
   candidate:candidate
 }
type candidateProps={
}
function mapStateToProps(state:any) {
  return {
    userId: state.userId,
    name: state.name,
    image: state.image
  
  }
}
function mapDispatchToProps(dispatch:any,data:any) {
  return {
    loginAction: () => {
          dispatch(loginAction(data));
      }
  }
}
class CandidatePage extends React.Component<candidateProps,candidateState> {
  constructor(props:any){
    super(props);
    this.state={
      candidate:{id:0,name:"",positionId:0,location:""}
    }
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  };
 handleInputChange(event:any) {
         const target = event.target;
         if(target.name=="name"){
             this.setState((state)=>({candidate:{id:0,name:event.target.value,
              positionId:state.candidate.positionId,location:state.candidate.location}}));
         }if(target.name=="location"){
          this.setState((state)=>({candidate:{id:0,name:state.candidate.name,
            positionId:state.candidate.positionId,location:event.target.value}}));
         }else{
          this.setState((state)=>({candidate:{id:0,name:state.candidate.name,
            positionId:event.target.value,location:state.candidate.location}}));
         }
 }

    handleSubmit(event :any){
      let data={
        userId: "raj@gmail.com",
        name: "Raja",
        image:"www.example.com/user.png"
    };
      loginAction(data);

      if(localStorage.candidate){
        let canidateId=localStorage.candidate.length+1;
        this.setState((state)=>({candidate:{id:canidateId,name:state.candidate.name,
          positionId:state.candidate.positionId,location:state.candidate.location}}));
        localStorage.candidate.push(this.state.candidate);
      }else{
        localStorage.candidate=[];
        this.setState((state)=>({candidate:{id:1,name:state.candidate.name,
          positionId:state.candidate.positionId,location:state.candidate.location}}));
        localStorage.candidate.push(this.state.candidate);
      }
      
    }
  render() {
    return (
      <div >
        <p>{store.getState().auth.userId}</p>
        <h1>Candidate Page</h1>
         <form onSubmit={this.handleSubmit}>
         <label>
            Name
            <input
              name="name"
              type="text"
              value={this.state.candidate.name}
              onChange={this.handleInputChange}
            />
          </label>
          <br/>
          <label>
            Location
            <input
              name="location"
              type="text"
              value={this.state.candidate.location}
              onChange={this.handleInputChange}
            />
          </label>
          <br/>
          <label>
            PostionID</label>
          <select id="postion-id" 
          value={this.state.candidate.positionId} onChange={this.handleInputChange}>
            <option value="1">General Manager</option>
            <option value="2">Project Manager</option>
            <option value="3">Team Lead</option>
          </select>
          <br/>
          <button type="submit">Create Candidate</button>
         </form>
        
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (CandidatePage)


// export default CandidatePage;
