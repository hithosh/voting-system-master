import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import * as React from "react";
import { connect } from 'react-redux'
import { loginAction } from "../redux/actions/LoginAction";
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';


type myState={
  anchorEl:any
  open:boolean
 }
type myProps={
}
class MUIAppbar extends React.Component<myProps,myState> {
  constructor(props:any){
    super(props);
    this.state={
   anchorEl:null,
   open:false
    }
   this.onClick=this.onClick.bind(this);
   this.handleClick=this.handleClick.bind(this);
  };
  onClick(event:any){
    this.setState((state)=>({anchorEl:event.currentTarget}));
  }

   handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.setState((state)=>({open:true}));
   
  };
   handleClose(event:any) {
    this.setState((state)=>({anchorEl:new HTMLElement()}));
  };

  render() {
    return (
      <div >
         <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
      <Toolbar>
          <IconButton 
          name=""
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            // onclick={this.handleClick}
            onClick={this.handleClick}
          >
            <MenuIcon />
         
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button name="login" color="inherit" onClick={this.onClick}>Login</Button>
          <IconButton
          name="Person"
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={this.onClick}
          >
            <PersonIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Menu
        id="basic-menu"
        anchorEl={this.state.anchorEl}
        open={this.state.open}
        onClose={this.handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={this.handleClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleClose}>My account</MenuItem>
        <MenuItem onClick={this.handleClose}>Logout</MenuItem>
      </Menu>
    </Box>
      </div>
    );
  }
}

export default MUIAppbar;

