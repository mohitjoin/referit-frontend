import React, { useState } from 'react';
import Axios from 'axios';
import Footer from '../Footer'
import './styleSubmiter.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Addreferral() {

    var [compname, setcompname] = useState("");
    var [clogolink, setclogolink] = useState("");
    var [crolerefer, setcrolerefer] = useState("");
    var [cskillsn, setcskillsn] = useState("");
    var [yname, setyname] = useState("");
    var [yemail, setyemail] = useState("");
    var [cldate, setcldate] = useState("");
    var [cjdlink, setcjdlink] = useState("");


    // var [refer, setrefer] = useState({}

    //     // CompanyLogoLink: compname,
    //     // CompanyName: clogolink,
    //     // Role: crolerefer,
    //     // SkillsNeed: cskillsn,
    //     // YrName: yname,
    //     // YrEmail: yemail,
    //     // ResumeLastDate: cldate,
    //     // JDLink: cjdlink


    // );


    const handleSubmitForm = () => {







        Axios.post('https://referit-backend.herokuapp.com/api/insertReferal', {
            coname: compname,
            cologolink: clogolink,
            corolerefer: crolerefer,
            coskillsn: cskillsn,
            coyname: yname,
            coyemail: yemail,
            coldate: cldate,
            cojdlink: cjdlink

        });
        console.log()




    }





    return ( <
        div >
        <
        div className = "referall-data-inputs-div" >

        <
        div className = "info-and-inputs" > <
        div className = "adder-heading" >
        Start Referring Others < /div> <form onSubmit={ handleSubmitForm}>

        <
        div className = "inputs-their-text" > < span className = "input-about-text" >
        Company Name < /span><
        TextField required id = "outlined-required"
        label = "Required"
        onChange = {
            (e) => {

                setcompname(e.target.value)

            }
        }
        placeholder = "Company Name"
        className = "inputs-all" /
        >
        <
        /div>

        <
        div className = "inputs-their-text" > < span className = "input-about-text" >
        Company Logo Link < /span><
        TextField required id = "outlined-required"
        label = "Required"
        type = "url"
        onChange = {
            (e) => {

                setclogolink(e.target.value)

            }
        }
        placeholder = "Company Logo Link"
        className = "inputs-all" /
        >
        <
        /div>

        <
        div className = "inputs-their-text" > < span className = "input-about-text" >
        Role you are referring < /span><
        TextField required id = "outlined-required"
        label = "Required"
        onChange = {
            (e) => {

                setcrolerefer(e.target.value)

            }
        }
        placeholder = "Role you are referring"
        className = "inputs-all" /
        >
        <
        /div>  <
        div className = "inputs-their-text" > < span className = "input-about-text" >
        Skills company need < /span><
        TextField required id = "outlined-required"
        label = "Required"
        onChange = {
            (e) => {

                setcskillsn(e.target.value)

            }
        }
        placeholder = "Skills company need"
        className = "inputs-all" /
        >
        <
        /div>  <
        div className = "inputs-their-text" > < span className = "input-about-text" >
        Your name < /span><
        TextField required id = "outlined-required"
        label = "Required"
        onChange = {
            (e) => {

                setyname(e.target.value)

            }
        }
        placeholder = "Your name"
        className = "inputs-all" /
        >
        <
        /div>  <
        div className = "inputs-their-text" > < span className = "input-about-text" >
        Your Email < /span><
        TextField required id = "outlined-required"
        label = "Required"
        type = "email"
        onChange = {
            (e) => {

                setyemail(e.target.value)

            }
        }
        placeholder = "Your Email"
        className = "inputs-all" /
        >
        <
        /div>  <
        div className = "inputs-their-text" > < span className = "input-about-text" >
        Last Date to send Resume < /span><
        TextField required id = "outlined-required"
        label = " "
        type = "date"
        onChange = {
            (e) => {

                setcldate(e.target.value)

            }
        }
        placeholder = "Last Date to send Resume"
        className = "inputs-all" /
        >
        <
        /div>  <
        div className = "inputs-their-text" > < span className = "input-about-text" >
        Link to job Description < /span><
        TextField required id = "outlined-required"
        label = "Required"
        type = "url"


        onChange = {
            (e) => {

                setcjdlink(e.target.value)

            }
        }
        placeholder = "Link to job Description "
        className = "inputs-all" /
        >
        <
        /div> 

        <
        div className = "submit-but-div" > <
        Button className = "submit-form-button"
        type = "submit" > Submit Referral Information < /
        Button > < /div>

        <
        /form> < /
        div >


        <
        /div>




        <
        Footer / > <
        /div>
    );
}

export default Addreferral;
