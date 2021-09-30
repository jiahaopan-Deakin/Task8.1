import React from 'react'
import './Card.css'

import { VscStarFull } from "react-icons/vsc";



function Card(props) {
    return(
    <div className="colum">
        <img src={props.avatar} alt="expert" />
        <h3>{props.name}</h3>
        <p>{props.position}</p>
        
        <h3><VscStarFull /> 5 Stars</h3>

    </div>)
}

export default Card