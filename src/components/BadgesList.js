import React, { Component } from 'react'
import BadgeItem from './BadgeItem'

export class BadgesList extends Component {
    render() {
        return (
            <div className="Badges__list">
                <div >
                    <ul className="list-unstyled list-group">
                        {this.props.data.map((badge) => {
                            return (
                                <BadgeItem key={badge.id} badge={badge} />
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default BadgesList;
