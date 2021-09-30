import React from "react";

const buttonstyle = {
    width:'15%',
    marginLeft:'1%',
    marginRight: '6px',
    backgroundColor: 'grey',
    border: 'none'
  }

  const divStyle = {
    backgroundColor:"grey",
  }

  function AllButtons(){
    return (
      <div style = {divStyle}>
      <button style={buttonstyle}>Iservice</button>
      <button style={buttonstyle}>Post a task</button>
      <button style={buttonstyle}>Become on epert</button>
      <button style={buttonstyle}>Find tasks</button>
      <button style={buttonstyle}>How it marks</button>
      <button style={buttonstyle}>Sign in</button>
      </div>
    )
  }

  export default AllButtons
  