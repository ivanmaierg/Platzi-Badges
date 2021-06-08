import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BadgeItem from './BadgeItem'

export class BadgesList extends Component {
    render() {
        if (this.props.data.length === 0) {
            return (
                < div className="container d-flex flex-column" >
                    <div className="alert alert-danger"><h3>Not badges were found</h3></div>
                    <Link className="btn btn-primary mx-auto" to="/badges/new">Create New Badge</Link>
                </div >
            )
        }
        return (
            <div className="Badges__list" >
                <div >
                    <ul className="list-unstyled list-group">
                        {this.props.data.map((badge) => {
                            return (
                                <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                                    <BadgeItem key={badge.id} badge={badge} />
                                </Link>    
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default BadgesList;
