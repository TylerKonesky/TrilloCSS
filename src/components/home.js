import React, {Component} from 'react';
import logo from '../images/logo.png';
import icons from '../images/sprite.svg';
import user from '../images/user.jpg';

class Home extends Component{
    render(){
        return(
            <div className="container">
                <header className="header">
                    <img className="logo" alt="logo" src={logo}></img>
                    <form action="#" className="search">
                        <input type="text" className="search__input" placeholder="Search Hotels"></input>
                        <button className="search__button">
                            <svg className="search__icon"><use xlinkHref={`${icons}#icon-magnifying-glass`}></use></svg>
                        </button>
                    </form>
                    <nav className="user-nav">
                        <div className="user-nav__icon-box">
                            <svg className="user-nav__icon"><use xlinkHref={`${icons}#icon-bookmark`}></use></svg>
                            <span className="user-nav__notification">7</span>
                        </div>
                        <div className="user-nav__icon-box">
                            <svg className="user-nav__icon"><use xlinkHref={`${icons}#icon-chat`}></use></svg>
                            <span className="user-nav__notification">14</span>
                        </div>
                        <div className="user-nav__user">
                            <img src={user} alt="User Photo" className="user-nav__user-photo"></img>
                            <span className="user-nav__user-name">Tyler</span>
                        </div>
                    </nav>
                </header>
                <div className="content">
                    <nav className="sidebar">
                        <ul className="side-nav">
                            <li className="side-nav__item side-nav__item--active">
                                <a href="#" className=" side-nav__link">
                                    <svg className="side-nav__icon"><use xlinkHref={`${icons}#icon-home`}></use></svg>
                                    <span>Hotel</span>
                                </a>
                            </li>
                            <li className="side-nav__item">
                                <a href="#" className=" side-nav__link">
                                    <svg className="side-nav__icon"><use xlinkHref={`${icons}#icon-aircraft-take-off`}></use></svg>
                                    <span>Flights</span>
                                </a>
                            </li>
                            <li className="side-nav__item">
                                <a href="#" className=" side-nav__link">
                                    <svg className="side-nav__icon"><use xlinkHref={`${icons}#icon-key`}></use></svg>
                                    <span>Car Rentals</span>
                                </a>
                            </li>
                            <li className="side-nav__item">
                                <a href="#" className=" side-nav__link">
                                    <svg className="side-nav__icon"><use xlinkHref={`${icons}#icon-map`}></use></svg>
                                    <span>Tours</span>
                                </a>
                            </li>
                        </ul>

                        <div className="legal">
                            &copy; 2020 All rights resetved.
                        </div>
                    </nav>
                    <main className="hotel-view">
                        Hotel View
                    </main>
                </div>
            </div>
        )
    }
}

export default Home;