import React from 'react'

const imagestyle = {
    width:'100%',
    height: '400px',
    marginTop: '30px',
  }
  
function ImageShow(){
    return(<img src = {require('./images/1.jpg').default} alt='1' style={imagestyle} />)
  }

  export default ImageShow