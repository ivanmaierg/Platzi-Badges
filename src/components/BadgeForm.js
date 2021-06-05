import React, { Component } from 'react'
import './styles/BadgeForm.css';
export class BadgeForm extends Component {

    render() {
        return (
            <div className="container BadgeForm__container">
                <h1>New Attendant</h1>
                <form action="">
                    <div className="form-group">
                        <label htmlFor="">First Name:</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="firstName" placeholder="First-Name" value={this.props.formValues.firstName} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Last Name:</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="lastName" placeholder="Last-name" value={this.props.formValues.lastName} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Email:</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="email" placeholder="Email" value={this.props.formValues.email} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Job title:</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="jobTitle" placeholder="Job title" value={this.props.formValues.jobTitle} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Twitter:</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="twitter" placeholder="Twitter" value={this.props.formValues.twitter} />
                    </div>
                        <button className="btn btn-primary mt-2" type="submit">Save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm
