import React from 'react';
import './Stylehome.css';
import LandBox1 from './LandBox1'
import LandBox2 from './LandBox2'
import LandBox3 from './LandBox3'
import LandBox4 from './LandBox4'
import LandBox5 from './LandBox5'
import Footer from '../Footer'


function Home() {
    return ( <
        div className = "Home-container" > <
        LandBox1 / > <
        LandBox2 / > <
        LandBox3 / > <
        LandBox4 / > <
        LandBox5 / > <
        Footer / > <
        /div>
    );
}

export default Home;