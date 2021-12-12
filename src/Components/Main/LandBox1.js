import React from 'react';
import './Stylehome.css';
import mainpath from './Mainassets/homepath.png'

function LandBox1() {
    return ( <
        div className = "main-land-cont" >
        <
        div className = "main-left-text" >
        <
        div className = "Text-dix-1" >
        Connecting < div > < /div>you with the best Referal  < /
        div > <
        div className = "Text-dix-2" >
        Because < /
        div > <
        div className = "Text-dix-3" > Referrals Works. < /
        div > <
        div className = "Text-dix-4" >
        if want to refer other then < /
        div > <
        a className = "Text-button-div-link"
        href = "/Finder" > <
        div className = "Text-button-div" >
        Get Started < /
        div > < /a>  < /
        div > <
        div className = "main-right-image" >
        <
        img src = { mainpath }
        className = "home-image"
        alt = "Home path pic" / >
        <
        /div> < /
        div >
    );
}

export default LandBox1;