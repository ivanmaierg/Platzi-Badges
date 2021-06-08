import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Error.css'
export default function Error({ error }) {
    return (
        <div className=" Error__container container  text-center d-flex flex-column align-items-center justify-content-center h-75 w-100">
            <div className="Error__container--code d-flex justify-content-center align-items-center flex-column">
                <span className="">{error.code}</span>
                
            </div>
            <div className="Error__container--message">{error.message && `Error:${error.message}`}</div>
            <h3>Opps!, Looks like something was wrong, we're working on it</h3>
            <Link className="btn btn-primary mt-3" to="/">Back to Home</Link>
        </div>
    )
}
