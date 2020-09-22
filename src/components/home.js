import React, {Component} from 'react';
import logo from '../images/logo.png';
import icons from '../images/sprite.svg';
import user from '../images/user.jpg';
import hotel1 from '../images/hotel-1.jpg';
import hotel2 from '../images/hotel-2.jpg';
import hotel3 from '../images/hotel-3.jpg';
import user1 from '../images/user-3.jpg';
import user2 from '../images/user-4.jpg';
import user3 from '../images/user-5.jpg';
import user4 from '../images/user-6.jpg';
import user5 from '../images/user-1.jpg';
import user6 from '../images/user-2.jpg';

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

                        <div className="detail">
                            <div className="description">
                                <p className="paragraph">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
                                </p>
                                <p className="paragraph">
                                Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.
                                </p>
                                <ul className="list">
                                    <li className="list__item">Close to the beach</li>
                                    <li className="list__item">Breakfast Included</li>
                                    <li className="list__item">Free airport shuttle</li>
                                    <li className="list__item">Free Wifi in all rooms</li>
                                    <li className="list__item">Air Conditioning and heating</li>
                                    <li className="list__item">Pets Allowed</li>
                                    <li className="list__item">We speak all languages</li>
                                    <li className="list__item">Perfect for families</li>
                                </ul>
                                <div className="recommend">
                                    <p className="recomment__count">
                                        Lucy and 3 other friends recomment this hotel.
                                    </p>
                                    <div className="recommend__friends">
                                        <img src={user1} alt="friend" className="recommend__photo"></img>
                                        <img src={user2} alt="friend" className="recommend__photo"></img>
                                        <img src={user3} alt="friend" className="recommend__photo"></img>
                                        <img src={user4} alt="friend" className="recommend__photo"></img>

                                    </div>
                                </div>
                            </div>
                            <div className="user-review">
                                <figure className="review">
                                    <blockquote className="review__text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
                                    </blockquote>
                                    <figcaption className="review__user">
                                        <img src={user5} alt="User Photo" className="review__photo"></img>
                                        <div className="review__user-box">
                                            <p className="review__user-name">Josh Tuckett</p>
                                            <p className="review__user-date">Aug 19th, 2020</p>
                                        </div>
                                        <div className="review__rating">8.1</div>
                                    </figcaption>
                                </figure>
                                <figure className="review">
                                    <blockquote className="review__text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.
                                    </blockquote>
                                    <figcaption className="review__user">
                                        <img src={user6} alt="User Photo" className="review__photo"></img>
                                        <div className="review__user-box">
                                            <p className="review__user-name">Samuel George</p>
                                            <p className="review__user-date">Sep 3rd, 2020</p>
                                        </div>
                                        <div className="review__rating">8.1</div>
                                    </figcaption>
                                </figure>
                                <button className="btn-inline">Show all <span>&rarr;</span></button>
                            </div> 
                        </div>
                        <div className="cta">
                            <h2 className="cta__book-now">
                                Good News! We have 4 free rooms for your selected dates!
                            </h2>
                            <button className="btn">
                                <span className="btn__visible">Book Now</span>
                                <span className="btn__invisible">Only 4 rooms left!</span>
                            </button>
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}

export default Home;