import React from 'react'

import './styles/BadgeItem.css';

export default function BadgeItem({ badge }) {
    return (
        <li className="Badge__item list-group-item mb-2 d-flex flex-row justify-content-center align-items-center" key={badge.id}>
            <div className="Badge__item-portrait"><img src={badge.avatarUrl}></img></div>
            <div className="Badge__item-info d-flex flex-column h100">
                <p className="Badge__item-name fw-bold">{badge.firstName} {badge.lastName}</p>
                <p>@{badge.twitter}</p>
                <p>{badge.jobTitle}</p>
            </div>
        </li>
    )
}
