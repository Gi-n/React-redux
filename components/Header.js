/* eslint-disable jsx-a11y/role-supports-aria-props */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo/logo.svg';
import isAuthenticated from '../layout/utils/isAuthenticated'
import { logout } from '../redux/actions';
import { connect } from 'react-redux'
import history from '../history'

class Header extends Component {

    logouthandler = () => {
        if (window.confirm('Are you sure you want to logout ?')) {
            this.props.logout(() => {
                history.push('auth/login')
            });
        }
    }

    render() {

        const isLoggedIn = () => {
            return (
                <li className="nav-item">
                    <button onClick={this.logouthandler} className="nav-button">SignOut</button>
                </li>
            )
        }

        const LoggedOut = () => {
            return (
                <>
                    <li className="nav-item">
                        <Link className="nav-button" to="/auth/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-button" to="/auth/register">Signup</Link>
                    </li>
                </>
            )
        }

        return (
            <div>
                <header className="header sticky-top">
                    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                        <div className="container">
                            <Link className="navbar-brand" to="/">
                                <strong className="h6 mb-0 font-weight-bold text-uppercase">
                                    <img className="mr-2" src={logo} alt="logo" />Learning
                            </strong>
                            </Link>
                            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about">About</Link>
                                    </li>
                                    {/* <li className="nav-item">
                                        <Link className="nav-link" to="/feature">Feature</Link>
                                    </li> */}
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Feature
                                        </Link>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <Link className="dropdown-item font-weight-medium text-capitalize" to="/feature">Users</Link>
                                            <Link className="dropdown-item font-weight-medium text-capitalize" to="/notes">Notes</Link>
                                            {/* <div className="dropdown-divider"></div> */}
                                            <Link className="dropdown-item font-weight-medium text-capitalize" to="#">Something else here</Link>
                                        </div>
                                    </li>
                                    {/* <li className="nav-item">
                                        <Link className="nav-link" to="/notes">Notes</Link>
                                    </li> */}
                                    {isAuthenticated() ? isLoggedIn() : LoggedOut()}

                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            </div >
        )
    }
}

const mapStateToProps = state => {
    return { auth: state.auth.data }
}

export default connect(mapStateToProps, { logout })(Header);