import React from 'react'

import SigninForm from './auth/SigninForm';
import {Link} from 'react-router-dom';

const LoginPage = () => {
    return (
        <div>
            <div className="container">
                <div className="row m-5 justify-content-center">
                    <div className="col-lg-8 align-justify-center pr-4 pl-0 contact-form">
                        <div className="card p-5 shadow-sm">
                                <Link to="/" className="text-right">Back to Home</Link>
                            <h2 className="mb-3 font-weight-light">Login</h2>
                            <h6 className="subtitle font-weight-normal">Lorem ipsum dolor sit amet, adipiscing.</h6>
                            <SigninForm />
                            <p>Don't have account ?<Link to="/auth/register"> Create Account</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;