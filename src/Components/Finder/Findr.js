import React, { useState, useEffect } from 'react';
import Footer from '../Footer'
import './styleFinder.css';
import Button from '@mui/material/Button';
import Axios from 'axios';



function Findr() {
    // {
    //     id: 1,
    //     CompanyName: 'Google',
    //     CompanyLogoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png',
    //     Role: 'SDE 1',
    //     SkillsNeed: 'Data Structure, OOPs,Operating System,',
    //     YrName: 'Mohit kumar',
    //     YrEmail: 'mohitkumar@gmail.com',
    //     ResumeLastDate: '1-1-2022',
    //     JDLink: 'https://www.amazon.jobs/en/jobs/1200321/software-development-engineer'
    // }

    var [referrals, setreferral] = useState([]);
    var [clear, setClear] = useState(false);

    useEffect(() => {
        Axios.get('http://localhost:7000/api/getAllRefferal').then((response) => {
            setreferral(response.data);
            //console.log(response.data);
        })
        .catch((err)=>{
            console.log("Error");
            setreferral([]);
        })
    }, [clear])
    var [searchCompany, setsearchCompany] = useState("")
    const handleSearchCompany = () => {
        // console.log(searchCompany)

        Axios.get(`http://localhost:7000/api/getSearchedRefferal/${searchCompany}`)
        .then((response) => {
            setreferral(response.data);
        }).catch((err)=>{
            console.log("Error Occured")
            setreferral([]);
        })

        setsearchCompany((pp) => {
            return searchCompany = '';
        });

        referrals = referrals || []

    }


    return ( <
        div > < div className = "Finder-info div" > <
        div > < div className = "text-div-finder" >
        Find the < span className = "purple-color-text" > Best Referral < /span> < br / >
        for You < br / > <
        input value = { searchCompany }
        className = "input-text-search"
        onChange = {
            (e) => {

                setsearchCompany(e.target.value)

            }
        }
        placeholder = "Enter Company name" / > <
        Button onClick = { handleSearchCompany }
        className = "Search-button-find" >
        Get Referral < /Button> < /
        div > < /
        div > <
        /div>

        <
        div className = "Referral-container-div" >
        <
        div className = "small-referral-heading" > <
        Button onClick = {
            () => {

                setClear(true)

            }
        }
        className = "clear-filter-button" > Clear Filters < /Button><br/ > Referrals For You < /div>

        {

       
            
            referrals.map((check, index) => {
                return ( <
                    div key = { index }
                    className = "referrals-info-small-divs" > <
                    div className = "company-logo-and-small-info" >
                    <
                    div className = "company-logo-image" >
                    <
                    img src = { check.clink }
                    className = "referral-company-image"
                    alt = "Company Logo" / >
                    <
                    /div> <
                    div className = "small-info-referral" > { check.mname } { " " }
                    is Refering to { check.cname } { " " }
                    for { check.crole } { " " }
                    Role,
                    You must have good knowledge of { " " } { check.cskills } <
                    /div> 


                    <
                    /div> <
                    div className = "about-refree-email" >
                    Email Your Resume at < a target = "_blank"
                    rel = "noreferrer noopener"
                    href = { "mailto:" + check.cemail } > { check.cemail } < /a> < /
                    div >

                    <
                    div className = "double-div-below-email" >
                    <
                    div className = "about-refree-email" >
                    Check Job Description at < a target = "_blank"
                    rel = "noreferrer noopener"
                    href = { check.cjdlink } > here < /a> < /
                    div > <
                    div className = "about-refree-email" >
                    Last Date to send Resume: < span className = "Focus-date" > { check.ldate } < /span> < /
                    div > < /
                    div >


                    <
                    /div>
                );


            })
            
          
        }

        <
        /div>

        <
        Footer / > <
        /div>
    );
}

export default Findr;
