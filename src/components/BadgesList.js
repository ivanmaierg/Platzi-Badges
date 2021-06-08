import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import BadgeItem from './BadgeItem'

const useSearchBadges = (badges) => {
    const [query, setQuery] = useState('');
    const [filteredBadges, setfilteredBadges] = useState(badges)

    useMemo(() => {
        const result = badges.filter(badge => {
            return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase())
        });
        setfilteredBadges(result);
    }, [badges, query]);
    return { filteredBadges, setQuery, query }
}

const BadgesList = (props) => {
    const badges = props.data;
    const { filteredBadges, setQuery, query } = useSearchBadges(badges)

    if (filteredBadges.length === 0) {
        return (
            < div className="container d-flex flex-column" >
                <div className="form-group mb-3">
                    <label>Filter Badges</label>
                    <input type="text" onChange={(e) => { setQuery(e.target.value) }} className="form-control" />
                </div>
                <div className="alert alert-danger"><h3>Not badges were found</h3></div>
                <Link className="btn btn-primary mx-auto" to="/badges/new">Create New Badge</Link>
            </div >
        )
    }
    return (
        <div className="Badges__list" >
            <div className="form-group mb-3">
                <label>Filter Badges</label>
                <input type="text" onChange={(e) => { setQuery(e.target.value) }} className="form-control" />
            </div>
            <div >
                <ul className="list-unstyled list-group">
                    {filteredBadges.map((badge) => {
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

export default BadgesList;
