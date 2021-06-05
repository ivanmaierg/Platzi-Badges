import React from 'react'
import { Link } from 'react-router-dom';

import astronaut from '../images/astronaut.svg';
import logoConf from '../images/logoConf.svg';
import './styles/Home.css';
const Home = () => {
    return (
        <div className="Home__container d-flex justify-content-center align-items-center">
            <div className="container Home__content m-auto">
                <div className="Home__content-text w-100 text-align-center">
                    <div className="content__text-img"><img className="w-100" src={logoConf}></img></div>
                    <h3 className="fs-2  my-1 font-weight-light">Print Your Badges</h3>
                    <p className="fs-5 my-auto font-weight-light">The Easiest way to manage your conference</p>
                    <Link to="/badges/new" className="btn btn-primary">Start now</Link>
                </div>
                <div className="container Home__content-img w-100"><img  className="w-100" src={astronaut} />
                </div>
            </div>
        </div>
    )
}

export default Home
