import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NoteForm from './NoteForm';
import { fetchNote, editNote } from '../../redux/actions/notes/notes'
import { connect } from 'react-redux';
import _ from 'lodash';
import history from '../../history';

class NotesEdit extends Component {

    componentDidMount() {
        this.props.fetchNote(this.props.match.params.id);
    }

    onSubmit = formValues => {
        this.props.editNote(this.props.match.params.id, formValues , () => {
            history.push('/notes')
        });
    }

    render() {
        return (
            <div>
                <div className="d-flex justify-content-between">
                    <h4 className="font-weight-bold text-uppercase">Notes</h4>
                    <Link to="/notes" type="button" className="btn btn-outline-secondary"> Notes </Link>
                </div>
                <p className="font-weight-bold">Notes Edit</p>
                <NoteForm
                    onSubmit={this.onSubmit}
                    loading={this.props.isLoading}
                    initialValues={_.pick(this.props.note, 'title', 'content', 'active')}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { note: state.notes[ownProps.match.params.id] ,isLoading: state.notes.loading}
}

export default connect(mapStateToProps, { fetchNote, editNote })(NotesEdit);