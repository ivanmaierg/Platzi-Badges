import React from 'react'

import { Link } from 'react-router-dom';
import confLogo from '../images/logoConf.svg';
import './styles/BadgeDetails.css';
import Badge from './Badge';
import DeleteBadgeModal from './DeleteBadgeModal';

function BadgeDetails({ badge, ...props }) {
    return (
        <div>
            <div className="BadgeDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={confLogo} alt="conf logo"></img>
                        </div>
                        <div className="col-6 BadgeDetails__hero-attendant-name">
                            <h1>{badge.firstName} {badge.lastName}</h1>
                        </div>

                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Badge firstName={badge.firstName} lastName={badge.lastName} email={badge.email} jobTitle={badge.jobTitle} twitter={badge.twitter} />
                    </div>
                    <div className="col-6 d-flex flex-column align-items-start">
                        <h3>Actions:</h3>
                        <div className="mb-3 w-25"><Link to={`/badges/${badge.id}/edit`} type="button" className="btn btn-primary  w-100 m-auto">Edit</Link></div>
                        <div className="w-25">
                            <button type="button" onClick={props.onOpenModal} className="btn btn-danger  w-100 m-auto">Delete</button>
                            <DeleteBadgeModal isOpen={props.isOpen} onClose={props.onCloseModal} onDelete={props.onDelete}>Lorem ipsum</DeleteBadgeModal>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BadgeDetails
