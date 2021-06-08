import React, { Component } from 'react'
import './styles/BadgeForm.css';
import uploadIcon from '../images/uploadIcon.svg';
export class BadgeForm extends Component {
    render() {
        return (
            <div className="BadgeForm__container d-flex justify-content-center flex-column">
                <div className="BadgeForm__form d-flex justify-content-center">
                    <form className="d-flex flex-column h-auto" onSubmit={this.props.onSubmit} action="">
                        <div className="form-group  mx-3 pt-4">
                            <label className="mb-2" htmlFor="firstName">First Name:</label>
                            <input onChange={this.props.onChange} className="form-control" type="text" id="firstName" name="firstName" placeholder="First-Name" value={this.props.formValues.firstName} />
                        </div>
                        <div className="form-group  mx-3 mb-4">
                            <label className="mb-2" htmlFor="lastName">Last Name:</label>
                            <input onChange={this.props.onChange} className="form-control" type="text" id="lastName" name="lastName" placeholder="Last-name" value={this.props.formValues.lastName} />
                        </div>
                        <div className="form-group   mx-3 mb-4">
                            <label className="mb-2" htmlFor="email">Email:</label>
                            <input onChange={this.props.onChange} className="form-control" type="text"  id="email" name="email" placeholder="Email" value={this.props.formValues.email} />
                        </div>
                        <div className="form-group  mx-3 mb-4">
                            <label className="mb-2" htmlFor="jobTitle">Job title:</label>
                            <input onChange={this.props.onChange} className="form-control" type="text" id="jobTitle" name="jobTitle" placeholder="Job title" value={this.props.formValues.jobTitle} />
                        </div>
                        <div className="form-group   mx-3 mb-4">
                            <label className="mb-2" htmlFor="twitter">Twitter:</label>
                            <input onChange={this.props.onChange} className="form-control" type="text" id="twitter" name="twitter" placeholder="Twitter" value={this.props.formValues.twitter} />
                        </div>
                        <div className="form-group  d-flex align-items-center m-auto">
                            <button className="Btn-upload m-auto mb-3" type="button"><div> <img className="img-fluid" alt="Upload icon" src={uploadIcon}></img></div><span>Upload image</span></button>
                        </div>
                        <div className="form-group   mx-3 mb-4">
                            <input onClick={this.handleCheckBox} onChange={this.props.onChange} className="form-checkbox"  id="terms" name="terms"  checked={this.props.formValues.terms} type="checkbox" />
                            <label htmlFor="terms">He leído  y acepto los Terminos y condiciones</label>
                        </div>
                        {this.props.error &&
                            <div class="form-group alert alert-danger mx-3">
                                <p>{this.props.error.message}</p>
                            </div>
                        }
                        <div className="form-group button mx-3"> <button className="btn btn-primary mt-2 w-100 p-3 fs-5 font-weight-bold" type="submit">Save</button></div>
                    </form>
                </div>
            </div>
        )
    }
}

export default BadgeForm
