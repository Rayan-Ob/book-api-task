import React, { useEffect } from 'react'
import { useState } from 'react'
import NavbarItems from './NavbarItems'
import "./NavbarStyle.css"
import { Link } from 'react-router-dom'

import sun from "../../../public/images/sun.svg"
import moon from "../../../public/images/moon.svg"
import baricon from "../../../public/images/barIcon.svg"
import closeicon from "../../../public/images/closeIcon.svg"
import logonav from "../../../public/images/logoNav.svg"
import logodark from "../../../public/images/logodark.svg"

function Navbar() {

    //  to toggle betwen mobile and desktop

    const [toggleNav, setToggleNav] = useState(false)
    function handletoggleNav() {
        setToggleNav(!toggleNav)
    }


    // dark and light
    const [theme, settheme] = useState(false)
    const handleClick = () => {
        settheme(!theme)
    }
    useEffect(() => {
        if (theme == true) {
            document.querySelector('body').setAttribute('data-theme', 'dark')
        }
        else {
            document.querySelector('body').setAttribute('data-theme', 'light')
        }
    })


    //  dark and light in mobile for toggle
    const switchTheme = (e) => {
        if ((e.target.checked)) {
            settheme(true)
        }
        else {
            settheme(false)
        }
    }
    return (
        <div>
            <nav>
                <div className='nav-row'>
                    {/* logo */}
                    <div className='logo'>
                        <img src={theme ? logodark : logonav} alt="logo" />
                    </div>

                    <NavbarItems classItem="nav-items-row" />

                    {/* dark and light button for desktop */}
                    <button id='dark-light' onClick={handleClick}>
                        <img src={theme? sun : moon} alt="moon or sun " />
                        <span> {theme ? "Light mood" : "Dark mood"}</span>
                    </button>

                    {/* bar icon for small sizes */}
                    <img
                        src={baricon}
                        alt=""
                        className="menu-icon"
                        onClick={handletoggleNav}
                    />

                </div>

                {/* Mobile section */}
                {/* toggle between bar icon and close icon */}
                {toggleNav ? (
                    <div className="nav-mobile flex-col color-change">
                        <img
                            src={closeicon}
                            alt=""
                            className="close-icon"
                            onClick={handletoggleNav}
                        />
                        <NavbarItems classItem='nav-mobile-items flex-al-c flex-col' />

                        {/* dark and light for mobile */}
                        <div className='btn-toggle'>
                            <div><span>{theme ? "Dark mood" : "Light mood"}</span></div>
                            <div>
                                <label className="switch">
                                    <input type="checkbox" onChange={switchTheme} />
                                    <span className="slider round"></span>
                                </label>
                            </div>

                        </div>


                    </div>
                ) : (
                    <></>
                )}
            </nav>
        </div>
    )
}

export default Navbar