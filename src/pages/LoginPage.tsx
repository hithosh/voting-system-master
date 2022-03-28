import * as React from "react";
// import { withRouter } from "react-router-dom";

interface login{
  username:string,
  password:string 
}
type myState={
    username:"",
    password:""  
 }
type myProps={
}
class LoginPage extends React.Component<myProps,myState> {
  constructor(props:any){
    super(props);
    this.state={
        username:"",
        password:""
    }
  
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.addingRefInput = this.addingRefInput.bind(this);  
    
     };
     componentDidMount(){
       // API calls Get data from Backend api
     }
    handleInputChange(event:any) {
            const target = event.target;
            if(target.name=="username"){
                this.setState((state)=>({username:event.target.value}));
            }else{
                this.setState((state)=>({password:event.target.value}));
            }
    }
    handleSubmit(event:any) {
        sessionStorage.username=this.state.username;
        sessionStorage.password=this.state.password;
     if((sessionStorage.username=="admin")&&(sessionStorage.password=="admin")){
      document.location.href="/dashborad";
     }
    }
    // addingRefInput() {  
    //   this.callRef.current.focus();  
    // }  
  render() {
    return (
      <div >
          <h1>Voting system login</h1>
          <form onSubmit={this.handleSubmit}>
          <label>
            Username
            <input
            // ref={this.callRef}
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </label>
          <br/>
          <label>
            Password
            <input
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </label>
          <br/>
          <button type="submit">Log in</button>
        </form>
        
      </div>
    );
  }
}

export default (LoginPage) ;