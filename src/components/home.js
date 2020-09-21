import React, {Component} from 'react';
import logo from '../images/logo.png';
import icons from '../images/sprite.svg';
import user from '../images/user.jpg';
import hotel1 from '../images/hotel-1.jpg';
import hotel2 from '../images/hotel-2.jpg';
import hotel3 from '../images/hotel-3.jpg';

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
                        <div className="gallery">
                            <figure className="gallery__item">
                                <img src={hotel1} alt="photo of hotel 1" className="gallery__photo"></img>
                            </figure>
                            <figure className="gallery__item">
                                <img src={hotel2} alt="photo of hotel 2" className="gallery__photo"></img>
                            </figure>
                            <figure className="gallery__item">
                                <img src={hotel3} alt="photo of hotel 3" className="gallery__photo"></img>
                            </figure>

                        </div>

                        <div className="overview">
                            <h1 className="overview__heading">
                                Hotel Las Palmas
                            </h1>
                            <div className="overview__star">
                                <svg className="overview__icon-star"><use xlinkHref={`${icons}#icon-star`}></use></svg>
                                <svg className="overview__icon-star"><use xlinkHref={`${icons}#icon-star`}></use></svg>
                                <svg className="overview__icon-star"><use xlinkHref={`${icons}#icon-star`}></use></svg>
                                <svg className="overview__icon-star"><use xlinkHref={`${icons}#icon-star`}></use></svg>
                                <svg className="overview__icon-star"><use xlinkHref={`${icons}#icon-star`}></use></svg>
                            </div>
                            <div className="overview__location">
                                <svg className="overview__icon-location"><use xlinkHref={`${icons}#icon-location-pin`}></use></svg>
                                <button className="btn-inline">Albufeira, Portugal</button>
                            </div>
                            <div className="overview__rating">
                                <div className="overview__rating-average">8.9</div>
                                <div className="overview__rating-count">267 Votes</div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}

export default Home;