import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../template/custom.css'

import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Menu from '../template/menu'
import Routes from './route'

export default props => (
    <BrowserRouter>
        <div className="container">
            <Menu />      
            <Routes />
        </div>
    </ BrowserRouter>
)