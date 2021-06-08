import React, { Component } from 'react'
import api from '../api';
import PageLoading from '../components/PageLoading';
import Error from '../components/Error';
import MyError from '../utils/MyError';
import BadgeDetails from '../components/BadgeDetails';


export class BadgeDetailsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalIsOpen: false,
            loading: true,
            error: null,
            data: undefined
        }
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
    handleOpenModal = (e) => {
        this.setState({ modalIsOpen: true })
    }
    handleCloseModal = (e) => {
        this.setState({ modalIsOpen: false })
    }
    handleDeleteBadge = async (e) => {
        this.setState({ loading: true, error: null });
        try {
            await api.badges.remove(this.props.match.params.badgeId);
            this.props.history.push('/badges');
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    }
    render() {
        if (this.state.loading) {
            return <PageLoading />
        }
        if (this.state.error) {
            return <Error error={this.state.error} />
        }
        return (
            <BadgeDetails isOpen={this.state.modalIsOpen} onOpenModal={this.handleOpenModal} onCloseModal={this.handleCloseModal} onDelete={this.handleDeleteBadge} badge={this.state.data} />
        )
    }
}

export default BadgeDetailsContainer;
