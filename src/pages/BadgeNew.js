import React from 'react';

import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import Logo from '../images/badge-header.svg';
import './styles/BadgeNew.css';
import BadgeForm from '../components/BadgeForm';
class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    }
  };
  handleChange = (e) => {
    const nextForm = this.state.form;
    nextForm[e.target.name] = e.target.value
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={Logo} alt="Logo"></img>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge firstName={this.state.form.firstName} lastName={this.state.form.lastName} email={this.state.form.email} jobTitle={this.state.form.jobTitle} twitter={this.state.form.twitter}></Badge>
            </div>
            <div className="col-6">
              <BadgeForm onChange={this.handleChange} formValues={this.state.form} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
