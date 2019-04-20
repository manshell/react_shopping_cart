import React from 'react'
import './style/navbar.css'

function Navbar() {
    return (
    <header>
        <div className="nav">
        <ul>
            <li class="home"><a className="active" href="#">Home</a></li>
            <li class="tutorials"><a href="#">Tutorials</a></li>
            <li class="about"><a href="#">About</a></li>
            <li class="news"><a href="#">Newsletter</a></li>
            <li class="contact"><a href="#">Contact</a></li>
        </ul>
        </div>
    </header>
    )
}

export default Navbar