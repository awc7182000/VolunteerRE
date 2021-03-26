import React from 'react'
import Carditem from './Carditem'
import './Cards.css'

function Cards() {
    return (
        <div id="heck" className="cards">
            <h1 id="heck">Any Events you're interested in?</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <Carditem 
                        src='Images/Bubble.png' alt='waterfall'
                        text="4K Annual Bubble Blast Fun Run!"
                        label='Volunteer'
                        path='/services'
                        />
                        <Carditem 
                        src= 'Images/ManorHouse.jpg'alt='waterfall'
                        text="Dress up! Come to the Annual Event at the manor house"
                        label='Volunteer'
                        path='/services'
                        /></ul>
                        <ul className="cards__items">
                        <Carditem 
                        src='Images/Golf.jpg' alt='waterfall'
                        text="Come to the annual Golf Outting and swing your way to the top"
                        label='Volunteer'
                        path='/services'
                        />
                        <Carditem 
                        src='Images/Office.jpg' alt='waterfall'
                        text="Office Administrator! Help around the office and prepare for future events"
                        label='Volunteer'
                        path='/services'
                        />
                        <Carditem 
                        src='Images/truck.jpg' alt='waterfall'
                        text="Help carry equipment and transport equipment"
                        label='Volunteer'
                        path='/services'
                        />
                    </ul>
                </div> 
            </div>
        </div>
    )
}

export default Cards
