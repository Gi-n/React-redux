import React, { Component } from 'react'

import { reduxForm, Field } from 'redux-form'
import * as actions from '../../redux/actions';

import { connect } from 'react-redux';
import { compose } from 'redux';
import history from '../../history';

import { required, minLength, email } from '../../layout/utils/inputValidations'
// import renderInput from '../../layout/utils/renderInput'

class SigninForm extends Component {

    showErrorMessage = () => {
        return (
            <div className="alert alert-danger" role="alert">
                {this.props.errorMessage}
            </div>
        )
    }



    onSubmit = formProps => {
        this.props.signin(formProps, () => {
            history.push('/');
        });
    }

    renderError = ({ error, touched }) => {
        if (error && touched) {
            return (
                <div className="invalid-feedback">
                    {error}
                </div>
            )
        }
    }

    renderInput = ({ type, input, label, meta: { touched, error }, placeholder }) => {
        const classError = `${error && touched ? 'is-invalid' : ''}`
        const errorColor = `${error && touched ? 'invalid-feedback' : ''}`
        return (
            <div className="mt-3" >
                <label htmlFor={label} >{label}</label>
                <input type={type} {...input} className={`form-control ${classError}`} placeholder={placeholder} autoComplete="off" />
                {touched && error && <span className={`${errorColor}`}>{error}</span>}
            </div>
        )
    }


    render() {
        const { handleSubmit, pristine, submitting } = this.props;
        return (
            <form className="mt-2 border-top" onSubmit={handleSubmit(this.onSubmit)}>
                <Field name="email" component={this.renderInput} validate={[required, email]} label="Email" type="text" placeholder="email" />
                <Field type="password" validate={[required, minLength(6)]} name="password" component={this.renderInput} label="password" placeholder="password" />
                <div className="mt-4">
                    <button type="submit" disabled={pristine || submitting} className={`btn btn-md btn-block btn-danger-gradiant text-white border-0 ${this.props.isLoading ? 'disabled' : ' '}`}>
                        {this.props.isLoading ? 'Loading...' : 'Login'}
                    </button>
                </div>
                <br />
                {this.props.errorMessage ? this.showErrorMessage() : null}
            </form>
        )
    }
}

const mapStateToProps = state => {
    return { errorMessage: state.auth.error, isLoading: state.auth.loading }
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: 'signin' })
)(SigninForm);