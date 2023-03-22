import React from "react";
import Tilt from 'react-parallax-tilt';
import brain from './brain.png'
import './Logo.css';

const Logo = () => {
    return (
        <div className='m4a mt0'>
            <Tilt className='Tilt br2 shadow-2 ml3' options={{ max: 55 }} style = {{ height: 100, width: 100 }}>
            <div className='Tilt-inner pa3'>
                <img style={{paddingTop: '5px'}} alt='logo' src={brain}/>
            </div>
            </Tilt>
        </div>
    
    )
}

export default Logo;