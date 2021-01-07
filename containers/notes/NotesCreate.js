import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import NoteForm from './NoteForm';

import { connect } from 'react-redux'
import { createNote } from '../../../src/redux/actions/notes/notes'
import history from '../../history';

class NotesCreate extends Component {

    onSubmit = formvalues => {
        this.props.createNote(formvalues, () => {
            history.push('/notes')
        })
    }

    render() {
        return (
            <div>
                <div className="d-flex justify-content-between">
                    <h4 className="font-weight-bold text-uppercase">Notes</h4>
                    <Link to="/notes" type="button" className="btn btn-outline-secondary"> Notes </Link>
                </div>
                <p className="font-weight-bold">Notes Create</p>
                <NoteForm onSubmit={this.onSubmit} loading={this.props.isLoading} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { isLoading: state.notes.loading }
}

export default connect(mapStateToProps, { createNote })(NotesCreate);
