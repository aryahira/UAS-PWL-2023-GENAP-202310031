import React from 'react'
import { NavLink } from 'react-router-dom';
import './HeaderNav.css'

export default function HeaderNav() {
    const menuList = [{ id: 1, name: "Home", path: "/home" },
                      { id: 2,  name: "Member", path: "/member" },
                      { id: 3,  name: "Login", path: "/login" }];
    return (
        <header>
            <nav className="navbar navbar-expand-md fixed-top shadow bg-white">
                <div className="container">
                    <a className="navbar-brand icon" href="/">
                        <img src={require('../../../assets/media/icon.png')} alt="fitness_fit" 
                        style={{ height: "60px" }} />
                        <h2 style={{ marginLeft: '53px' }} className='fitness'>FitnessFit</h2>
                    </a>
                    <button className="navbar-toggler" type="button">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="d-flex w-100 justify-content-end">
                            <div id='main-nav'>
                                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                    {menuList.map((v, index) => (
                                        <li className="nav-item me-1" key={index}>
                                            <NavLink className="nav-link text-hover-success px-3" to={v.path}>
                                                {v.name}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}