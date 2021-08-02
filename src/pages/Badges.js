import React, { Component } from 'react'
import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';
import { Link } from 'react-router-dom';
import api from '../api';
import PageLoading from '../components/PageLoading';
import MyError from '../utils/MyError';
import Error from '../components/Error';

export class Badges extends Component {
    constructor(props) {
        super(props)
        this.state = { loading: true, error: null, data: undefined };
    }
    componentDidMount() {
        this.fetchData();
    }
    fetchData = async () => {
        this.setState({ loading: true, error: null });
        try {
            const data = await api.badges.list();

            this.setState({ loading: false, data: data })
        } catch (error) {
            console.log(error);
            this.setState({ loading: false, error: new MyError(error.message, error.code) })
        }
    }
    render() {
        if (this.state.loading === true) {
            return <PageLoading />
        }
        if (this.state.error) {
            return (
                <Error error={this.state.error} />
            )
        }
        return (
            <div className="">
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" alt="conf logo" src={confLogo} />
                        </div>
                    </div>
                </div>
                <div className="Badges__container">
                    <div className="Badges__buttons ">
                        <Link to="/badges/new" className="btn btn-primary">
                            New Badge
                        </Link>
                    </div>
                    <BadgesList data={this.state.data} />
                </div>
            </div>
        )
    }
}

export default Badges
