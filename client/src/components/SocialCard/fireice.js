import React, { useState } from 'react';
import Toggle from './toggle';
import './fireice.css';
import Fire from '../../assets/images/firegif.gif';
import Ice from '../../assets/images/ice.png';


const FireIce = () => {

    const [toggled, setToggled] = useState(false);

    return (
        <div className={ toggled ? "fire-color" : "iced-color"}>
            <Toggle onChange={(event) => setToggled(event.target.checked)} />
            <span>
                <div className="iscontact">
                <p> The Contact is { toggled ? <img className="fire-images" src={Fire} alt="fire" /> : <img className="ice-images"src={Ice} alt="ice" /> }</p>            
                </div>
            </span>
        </div>
    );
}

export default FireIce;


