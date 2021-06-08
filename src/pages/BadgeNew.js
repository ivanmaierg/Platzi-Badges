import React from 'react';

import Badge from '../components/Badge';
import logoConf from '../images/logoConf.svg';
import './styles/BadgeNew.css';
import BadgeForm from '../components/BadgeForm';
import api from '../api.js';
import PageLoading from '../components/PageLoading';
class BadgeNew extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      terms: false,
      twitter: '',
    }
  };

  handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: value,
      }
    })
    console.log(this.state.form.terms)
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: false, error: null })
    if (this.state)
      try {
        await api.badges.create(this.state.form);
        this.setState({ loading: false });
        this.props.history.push('/badges');
      } catch (error) {
        this.setState({ loading: false, error: error });
      }

  }
  render() {
    if (this.state.loading) {
      return (<PageLoading />)
    }
    return (
      <div className="main">
        <div className="BadgeNew__hero"></div>
        <div className="container BadgeNew__container">
          <div className="BadgeNew__container--col-1">
            <div className="h-100 align-self-center mb-4"><img className="img-fluid" src={logoConf} alt="Logo"></img></div>
            <div className="h-100 mb-3 w-75 align-self-center"><Badge firstName={this.state.form.firstName} lastName={this.state.form.lastName} email={this.state.form.email} jobTitle={this.state.form.jobTitle} twitter={this.state.form.twitter}></Badge></div>
          </div>
          <div className="BadgeNew__container--col-2">
            <div className="d-flex justify-content-center align-items-center"><h1 className="BadgeForm__title m-auto">New Attendant</h1></div>
            <BadgeForm onChange={this.handleChange} onSubmit={this.handleSubmit} formValues={this.state.form} error={this.state.error} />
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
