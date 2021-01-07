import React, { Component } from 'react'
import SignupForm from './auth/SignupForm';
import {Link} from 'react-router-dom';

 class SignupPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="row m-5 justify-content-center">
                    <div className="col-lg-8 align-justify-center pr-4 pl-0 contact-form">
                        <div className="card p-5 shadow-sm">
                        <Link to="/" className="text-right">Back to Home</Link>
                            <h2 className="mb-3 font-weight-light">Register</h2>
                            <h6 className="subtitle font-weight-normal">Join our community.</h6>
                            <SignupForm />
                            <p>Already have account ? <Link to="/auth/login">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignupPage;