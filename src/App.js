import React from "react";
import ImageShow from './Image'
import AllButtons from './Button'
import Footer from './Footer'
import ExpertsList from "./ExpertsList";
import "./HeadingStyle.css"



function Heading() {
  return (<h1 className="header">Featured Experts</h1>)
}

function App() {
  return (
    <div>  
    <AllButtons />
    <ImageShow />
    <Heading />
    <ExpertsList />
    <Footer />
    </div>
  );
}

export default App;
