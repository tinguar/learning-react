import React, { useEffect, useState } from 'react'
import Header from '../molecules/header'
import Login from './Login'
import Register from './Register'
import Dashboard from './Dashboard'
import Footer from '../molecules/footer'

function Layout() {

    const [navigation,setNavigation]=useState("")

    useEffect(()=>{
        setNavigation("login")
    },[])
    
  return (
    <div className="container">
            <div className="row">
                <Header/>
            </div>
            <div className="row">
                {
                    navigation==="login"&&(<Login/>)
                }
                {
                    navigation==="register"&&(<Register/>)
                }
                {
                    navigation==="dashboard"&&(<Dashboard/>)
                }
            </div>
            <div className="row">
                <Footer/>
            </div>
    </div>
  )
}

export default Layout