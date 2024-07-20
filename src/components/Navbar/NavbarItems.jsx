import React from 'react'
import { Link } from 'react-router-dom'



function NavbarItems({ classItem }) {
    return (
        <div> 
            <ul  className={classItem}>
            <li><a href="/">home</a></li>
                <li> News</li>
                <li>Promotion of the mount </li>
                <li>Plublishs </li>
                <li>Subscribe to the newsletter </li>
            </ul>
       
        </div>
    )
}

export default NavbarItems