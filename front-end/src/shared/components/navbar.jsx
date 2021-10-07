import React from 'react'
import user from '../../assets/images/user.png'
import './navbarStyles.css'

const navbar = (props) => {
    return (
        <nav className="navbar" >
            <ul className="userName">
                <img src={user} alt="user" />
                <ol>{props.userName}</ol>
            </ul>
        </nav>
    )
}

export default navbar
