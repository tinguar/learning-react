import React, { useState } from 'react'
import Button from '../../atoms/button'
import "./style.css"

function Header() {

    const [sessionState,setSessionState]=useState(true)

    const sesionController=()=>{
        setSessionState(!sessionState)
    }

    const navigationConfig=[
        {
            label:"Login",
            color:"primary",
            size:'sm',
            pulse:()=>{}
        },
        {
            label:"Register",
            color:"primary",
            size:'sm',
            pulse:()=>{}
        },
        {
            label:"Logout",
            color:"primary",
            size:'sm',
            pulse:()=>{}
        },
    ]

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">Task application app</a>
        <div className="collapse navbar-collapse" id="navbarScroll">
        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll nav-style" >    
        {
            navigationConfig.map((item,index)=>{
                const navLink=<li 
                    className="nav-item"
                    key={index}
                >
                    <Button
                        label={item.label}
                        color={item.color}
                        size={item.size}
                        pulse={item.pulse}
                    />
            </li>
            if(sessionState==true){
                return item.label==="Logout"?navLink:null
            }else{
                return item.label!=="Logout"?navLink:null
            }
            })
        }
        </ul>
        </div>
    </div>
    </nav>
  )
}

export default Header

