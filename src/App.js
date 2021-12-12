 import './App.css';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import React, { useState } from 'react';
 import Button from '@mui/material/Button';
 import {
     BrowserRouter as Router,
     Routes,
     Route,
     Link
 } from "react-router-dom";
 import Home from './Components/Main/Home'
 import Findr from './Components/Finder/Findr'
 import Addreferral from './Components/Submitter/Addreferral'
 import { FaHive } from "react-icons/fa";



 function App() {

     var [shoem, setshowm] = useState("invi")
     const handleShow = () => {
         setshowm((pp) => {

             return (shoem === "invi" ? "visi" : "invi")

         });
     }





     return ( <
         div className = "App" >
         <
         Router > <
         div className = "Nav-div" >
         <
         span className = "Site-Name" > REFER - IT < /span> <div className="small-screen-menu"><
         FaHive onClick = { handleShow }
         className = "menu-react-icon" / > < /div >



         <
         div className = "nav-items-divs" > <
         div className = "nav-items-divs-text" > < Link className = "Nav-div-link"
         to = "/ " > Home < /Link>  < /div > <
         div className = "nav-items-divs-text" > < Link className = "Nav-div-link"
         to = "/Finder" > Find Referal < /Link>   < /div > <
         div > < Link className = "Nav-div-link"
         to = "/Addreferral" > < Button className = "Site-Nav-button" > Refer Now < /Button> </Link > < /div > < /
         div > < /
         div >


         <
         div className = { shoem } >


         <
         div className = "nav-items-divs-sm" > <
         div className = "nav-items-divs-text" > < Link className = "Nav-div-link"
         to = "/ " > Home < /Link>  < /div > <
         div className = "nav-items-divs-text" > < Link className = "Nav-div-link"
         to = "/Finder" > Find Referal < /Link>   < /div > <
         div > < Link className = "Nav-div-link"
         to = "/Addreferral" > < Button className = "Site-Nav-button" > Refer Now < /Button> </Link > < /div > < /
         div >






         <
         /div> 



         <
         div >
         <
         Routes >
         <
         Route path = '/'
         element = { < Home / > }
         /> <
         Route path = 'Home'
         element = { < Home / > }
         /> <
         Route path = '/Finder'
         element = { < Findr / > }
         /> <
         Route path = '/Addreferral'
         element = { < Addreferral / > }
         /> < /
         Routes > <
         /
         div >




         <
         /Router>




         <
         /div>
     );
 }

 export default App;