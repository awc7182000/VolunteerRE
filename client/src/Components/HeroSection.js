import React from 'react'
import '../App.css'
import './HeroSection.css'
import { Button } from './Button'

const HeroSection = () => {
    return (
        <div className="hero-container">
            <video src="/Videos/video-1.mp4" autoPlay loop muted />
            <h1>Building Blocks 4 Kids</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    Volunteer here!
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
