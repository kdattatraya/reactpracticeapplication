import React, { PropTypes } from 'react';


class Hello extends React.Component{

constructor(props){
  super (props);
  this.state = {
  name :"DATTA"
  }
}


sayHi(event) {
  alert(`Hi ${this.state.name}`);
  console.log("Hi clicked");
}


render(){
  return (
    <div>
    <a href='#' onClick= {this.sayHi.bind(this)}><button>Hi</button></a>
    </div>
  
  );
}
}

Hello.PropTypes={
  name: React.PropTypes.string.isRequired
}


export default Hello;