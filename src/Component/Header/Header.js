import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <div>
                <Link to='/home'>Mammy Searching</Link>
            </div>
            <NavLink>
                <Link to='/'>
                </Link>
            </NavLink>
            <div>
                <span>{localStorage.getItem("username")}</span>
                <span>{localStorage.getItem("username").str.substr(0, 1)}</span>
            </div>
        </div>
    )
}

export default Header