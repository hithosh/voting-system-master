import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList/MenuList";
import * as React from "react";
type myState={
  
 }
type myProps={
}
class DashboardPage extends React.Component<myProps,myState> {
  constructor(props:any){
    super(props);
    this.state={
    }
      this.handleMenuClick=this.handleMenuClick.bind(this);
        };
        handleMenuClick(event:any){
          switch(event.target.id){
            case "add_candidate":
                  document.location.href="/candidate";
                 break;
            case "add_voter":
                  document.location.href="/voter";
                  break;
            case "add_position":
                    document.location.href="/position";
                    break;
            case "result":
                    document.location.href="/result";
                    break;
            case "polling":
                    document.location.href="/polling";
                    break;
          }
        }
  render() {
    return (
      <div >
        <h1>Welcome to Dashboard page</h1>
        <MenuList
                    autoFocusItem={true}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                  >
                    <MenuItem id="add_candidate" onClick={this.handleMenuClick}>Adding Candidate</MenuItem>
                    <MenuItem id="add_voter" onClick={this.handleMenuClick}>Adding Voter</MenuItem>
                    <MenuItem id="add_position" onClick={this.handleMenuClick}>Adding position</MenuItem>
                    <MenuItem id="result" onClick={this.handleMenuClick}>View Result</MenuItem>
                    <MenuItem id="polling" onClick={this.handleMenuClick}>Polling</MenuItem>
                  </MenuList>
         
        
      </div>
    );
  }
}

export default DashboardPage;