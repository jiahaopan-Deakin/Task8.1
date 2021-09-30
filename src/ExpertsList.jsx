import React from 'react'
import Card from './Card'
import './Card.css'
import expertList from './expertList'

function cardComponent (expert , i) {
    return <Card
        avatar = {expert.avatar}
        name = {expert.name}
        position = {expert.position}
    />
}

function ExpertsList() {
    return(
        <div className="row">
           {expertList.map(cardComponent)}
        </div>)
}

export default ExpertsList
