import React from 'react'
import {Link} from 'react-router-dom'

export default props => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">TODO APP</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link to="todos" className="nav-link">TODOS</Link>
                </li>
                <li className="nav-item">
                    <Link to="about" className="nav-link">ABOUT</Link>
                </li>
            </ul>
        </div>
    </nav>
)