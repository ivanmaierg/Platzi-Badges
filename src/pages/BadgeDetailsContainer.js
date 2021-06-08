import React, { Component } from 'react'
import api from '../api';
import PageLoading from '../components/PageLoading';
import Error from '../components/Error';
import MyError from '../utils/MyError';
import BadgeDetails from '../components/BadgeDetails';


export class BadgeDetailsContainer extends Component {
    state = {
        loading: true,
        error: null,
        data: undefined
    }

    componentDidMount() {
        this.fetchData()
    }
    fetchData = async () => {
        this.setState({ loading: true, error: null })
        try {
            const data = await api.badges.read(this.props.match.params.badgeId)
            this.setState({ loading: false, data: data })
        } catch (error) {
            this.setState({ loading: false, error: new MyError(error.message, error.code) })
        }
    }
    render() {
        if (this.state.loading) {
            return <PageLoading />
        }
        if (this.state.error) {
            return <Error error={this.state.error} />
        }
        const badge = this.state.data;
        return (
            <BadgeDetails badge={badge} />
        )
    }
}

export default BadgeDetailsContainer;
