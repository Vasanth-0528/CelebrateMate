import React, { useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import DashBoard from './DashBoard'
import Profile from './Profile'
import Friends from './Friends'
import Settings from './Settings'
import './MainPage.css'
import Events from './Events'
// import SearchBar from '../components/SearchBar'

const MainPage = () => {
    const [page, setPage] = useState('dashboard')
    useEffect(()=>{
        if(!localStorage.getItem("user_token")){
            window.location.href = "/login"
        }
    })
    return (
        <div className='main-page-div'>
            <div className='side-bar'>
                <SideBar page={page} setPage={setPage} />
            </div>
            <div className='main-page'>
                <div className='page-selector'>
                    {(page === "dashboard" ? <div><DashBoard /></div> : null)}
                    {(page === "friends" ? <div><Friends /></div> : null)}
                    {(page === "settings" ? <div><Settings /></div> : null)}
                    {(page === "profile" ? <div><Profile /></div> : null)}
                    {(page === "events" ? <div><Events/></div> : null)}
                </div>
            </div>
        </div>
    )
}

export default MainPage
