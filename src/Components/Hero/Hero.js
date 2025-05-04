import React from 'react';
import './Hero.css'

const Hero = () => {
    return(
        <div className='hero-box d-flex justify-content-between'>
            <div className='hero-paragraph'>
            <p className="paragraph">Hello</p>
            <h1 className="paragraph">my name is <span className='name-span'>VaLtOr</span></h1>
            <p className="paragraph">a <span className="fisrt-span">FrontEnd</span> <span className="second-span">&lt;developer/&gt;</span> </p>
            </div>

            <div className='hero-pic'>
                <img className='' src="Images/cody.svg" alt="cody logo" draggable='false' loading='lazy'/>
            </div>

        </div>
    )
}

export default Hero;