import React, { Component } from 'react';  
import { render } from 'react-dom';  
import { ThemeContext, themes } from '../theme-context';
import ThemedButton from '../themed-button';
   
type myState={
  theme:{ foreground: string; background: string; }
}
type myPropse={

}

class RefSample extends React.Component<myPropse,myState> {

  //Step 1
  private callRefInput: React.RefObject<HTMLInputElement >;

  // public callRefInput: React.RefObject<HTMLOrSVGElement>;
   
    constructor(props:any) {  
    super(props);  
    //Step2
    this.callRefInput =  React.createRef();  
  this.onSubmit=this.onSubmit.bind(this);
   this.toggleTheme=this.toggleTheme.bind(this);
  this.state= {theme: themes.light};
   
  } 
  setInputRef = (element:any) => {  
    this.callRefInput = element;  
  };  

  onSubmit(event:any) {  
   alert("Data submitted")
  };  
  toggleTheme = () => {
    this.setState(state => ({
      theme:
        state.theme === themes.dark? themes.light : themes.dark,
    }));
  };

  
  componentDidMount() {
    //@ts-ignore
    this.callRefInput.select();  // step4
  }  ;
  
  render() {  
    return (  
      <div>  
    <h2>Refs Sample</h2>  
    <label>First Name</label>
        <input  
          type="text"  
          value="Raja"
          ref={this.setInputRef} //Step 3 
        />  
        <br/>
        <label>Middle Name</label>
        <input  
          type="text" 
        />  
        <br/>
        <label>Last Name</label>
        <input  
          type="text"
        />  
        <br/>
         <input  
          type="button"  
          value="Submi"  
          onClick={this.onSubmit}  
        />   
        <br/>
        <ThemeContext.Provider value={this.state.theme}>
        <ThemedButton onClick={this.toggleTheme}>Chang Theme</ThemedButton>
        </ThemeContext.Provider>
        
      </div>  
    );  
  }  
}  
export default RefSample;