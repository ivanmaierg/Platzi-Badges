import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../images/404Error.svg';
import './styles/NotFound.css';

export const NotFound = () => {
    return (
        <div className="NotFound__container d-flex justify-content-center">
            <div className="container NotFound__content">
                <div className="container NotFound__content-img"><img src={notFound} className="" />
                </div>
                <div className="container NotFound__content-text">
                    <h3 className="fs-1 font-weight-bold">Upps!</h3>
                    <p className=" fs-5 font-weight-light">Parece que estás perdido...</p>
                    <Link to="/" className="btn btn-primary">Regresar</Link>
                </div>
            </div>
        </div>
    )
}
