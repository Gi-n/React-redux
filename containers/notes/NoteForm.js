import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Toggle from 'react-toggle'

class NoteForm extends Component {

    state = { ischecked: null };

    renderInput = ({ type, input, label, meta: { touched, error }, className, placeholder }) => {
        const classError = `${error && touched ? 'is-invalid' : ''}`
        const errorColor = `${error && touched ? 'invalid-feedback' : ''}`
        return (
            <div className="mt-2" >
                <label>{label} :</label>
                <input type={type} {...input} className={`form-control ${classError}`} placeholder={placeholder} autoComplete="off" />
                {touched && error && <span className={`${errorColor}`}>{error}</span>}
            </div>
        )
    }

    renderToggleInput = field => {
        const { value, onChange } = field.input
        const { initialValues } = this.props;
        this.setState({ ischecked: value })
        return (
            <div>
                <Toggle defaultChecked={initialValues ? initialValues.active : false} onChange={onChange} icons={false} />
            </div>

        )
    };

    onSubmit = (formValues) => {
        if (!this.state.ischecked) {
            formValues.active = false
        }

        this.props.onSubmit(formValues);
    }


    render() {


        const { handleSubmit, loading, valid } = this.props;

        return (
            <div className="col-md-10 m-auto border rounded p-5">
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    <Field type="text" name="title" placeholder="Enter Title" component={this.renderInput} label="Title" />
                    <Field type="textarea" name="content" placeholder="Enter Content" component={this.renderInput} label="Content" />

                    <div className="mt-2">
                        <label>is Active</label>
                        <Field type="checkbox" name="active" component={this.renderToggleInput} />
                    </div>
                    <div className="mt-4">
                        <button type="submit" disabled={!valid} className="btn btn-md btn-block btn-danger-gradiant w-25 text-white border-0 ">
                            {!loading ? 'Submit' : 'Submitting...'}
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

const validate = formValue => {
    const errors = {};
    if (!formValue.title) errors.title = 'You must enter a title';
    if (!formValue.content) errors.content = 'You must enter a content'
    return errors;
}

export default reduxForm({
    form: 'NoteForm',
    validate,
    enableReinitialize: true
})(NoteForm);