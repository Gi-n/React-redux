import React, { Component } from 'react'

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchNotes, deleteNote } from '../../redux/actions/notes/notes'
import ModalPopup from '../ModalPopup';
import history from '../../history';

class NotesPage extends Component {
    state = { showModal: false, noteId: null };

    componentDidMount() {
        this.props.fetchNotes();
    }

    renderCreate = () => {
        return (
            <Link to="/notes/create-note" type="button" className="btn btn-outline-secondary"> Create Notes </Link>
        )
    }

    renderModal = (note) => {
        this.setState({ noteId: note.id });
        this.showModal(note)
    }

    renderhandleAction = (note) => {
        return (
            <ul className="list-inline m-0">
                <li className="list-inline-item">
                    <Link to='/notes/create-note' className="btn btn-primary btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Add">
                        <i className="fa fa-table"></i>
                    </Link>
                </li>
                <li className="list-inline-item">
                    <Link to={`/notes/edit/${note.id}`} className="btn btn-success btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i className="fa fa-edit"></i></Link>
                </li>
                <li className="list-inline-item">
                    <button onClick={() => this.renderModal(note)} className="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i className="fa fa-trash"></i></button>
                </li>
            </ul>
        )
    }

    renderContent = () => {
        return `Are you sure you want to delete this note? `;
    }

    deleteNote = () => {
        const id = this.state.noteId;
        this.props.deleteNote(id, () => {
            this.closeModel();
            this.props.fetchNotes();
        })
    }

    renderActions = () => {
        return (
            <React.Fragment>
                <button onClick={() => this.deleteNote()} className="btn btn-danger">Delete</button>
                <button onClick={this.closeModel} className="btn btn-secondary">Cancel</button>
            </React.Fragment>
        )
    };

    renderDatatable = (notes) => {
        return (
            <div className="table-responsive ">
                <ModalPopup
                    removeModal={click => this.closeModel = click}
                    setModal={click => this.showModal = click}
                    title="Delete Note"
                    content={this.renderContent()}
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/notes')}
                    size="lg"
                />
                <table className="table m-0">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Content</th>
                            <th scope="col">Active</th>
                            <th scope="col">Handle</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {notes.map(res => {
                            return (
                                <tr key={res.id}>
                                    <th scope="row">{res.id}</th>
                                    <td>{res.title}</td>
                                    <td>{res.content}</td>
                                    <td>{res.active === true ? 'active' : 'inactive'}</td>
                                    <td>
                                        {this.renderhandleAction(res)}
                                    </td>
                                </tr>
                            )
                        })
                        }

                    </tbody>
                </table>

            </div>
        )
    }

    render() {
        const { notes, isloading } = this.props;

        if (isloading) return <h4>Loading....</h4>;
        if (!notes) return null;

        return (
            <div>
                <div className="d-flex justify-content-between">
                    <h4 className="font-weight-bold text-uppercase">Notes</h4>
                    {this.renderCreate()}
                </div>
                <p className="font-weight-bold">Notes List</p>
                <div className="border col-md-10 m-auto">
                    {this.renderDatatable(notes)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes.data,
        isloading: state.notes.loading
    }
}


export default connect(mapStateToProps, { fetchNotes, deleteNote })(NotesPage);