import React from 'react';
import personphone from './Mainassets/personwithphone.png'

function LandBox2() {
    return ( <
        div className = "main-land-cont2" > <
        div className = "blured-image" > <
        img src = { personphone }
        className = "Person with phone"
        alt = "Home path pic" / > < /div> <
        div className = "info-div-land2" >
        <
        div className = "small-dots" >
        <
        div className = "small-dot-divs" > < /div> <
        div className = "small-dot-divs" > < /div> <
        div className = "small-dot-divs" > < /div>

        <
        /div> <
        div className = "Text-dix-5" >
        Start Refering others with one Click < /
        div > <
        div className = "Text-dix-6" >
        Refer a right candidate to right company. < /
        div > <
        a className = "Text-button-div-link"
        href = "/Addreferral" > <
        div className = "Text-button-div-land2" >
        Refer < /
        div > < /a>


        <
        /div>< /
        div >
    );
}

export default LandBox2;