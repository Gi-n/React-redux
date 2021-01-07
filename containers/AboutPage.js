import React, { Component } from 'react';
import DataTable from '../layout/utils/DataTable';

import { connect } from 'react-redux';
import { fetchNotes,deleteNote } from '../redux/actions/notes/notes';
import { Link } from 'react-router-dom';
import history from '../history';
import ModalPopup from './ModalPopup';
import Filters from './Filters';

class AboutPage extends Component {
    state = { showModal: false, noteId: null };

    componentDidMount() {
        this.props.fetchNotes();
    }

    headers = ['#', 'Title', 'Content', 'Active','Action']

    renderModalActions = () => {
        return (
            <React.Fragment>
                <button onClick={() => this.deleteNote()} className="btn btn-danger">Delete</button>
                <button onClick={this.closeModel} className="btn btn-secondary">Cancel</button>
            </React.Fragment>
        )
    };

    renderActions = (note) => {
        return (
            <React.Fragment>
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
            </React.Fragment>
        )
    };

    renderModal = (note) => {
        this.setState({ noteId: note.id });
        this.showModal(note)
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

    render() {
        const { notes } = this.props;

        if (!notes) return null;

        const notesdata = [];
        notes.map(res => {
            return notesdata.push({
                id: res.id,
                title: res.title,
                content: res.content,
                active: res.active ? <span className="badge badge-pill badge-primary">Active</span> : <span className="badge badge-pill badge-secondary">Inactive</span>,
                action: this.renderActions(res) 
            })
        })
        
        if (!notesdata || notesdata === undefined) return <h3>Loading....</h3>;

        return (
            <div>
                <ModalPopup
                    removeModal={click => this.closeModel = click}
                    setModal={click => this.showModal = click}
                    title="Delete Note"
                    content={this.renderContent()}
                    actions={this.renderModalActions()}
                    onDismiss={() => history.push('/about')}
                    size="md"
                />
                 <h4 className="font-weight-bold text-uppercase">About</h4>                
                <p className="font-weight-bold">Note List / Datatable</p>
                <Filters />
                <DataTable headers={this.headers} tabledata={notesdata}  />
            </div>
        );
    }
}


const mapStatetoProps = state => {
    return { notes: state.notes.data, isLoading: state.notes.loading }
}

export default connect(mapStatetoProps, { fetchNotes,deleteNote })(AboutPage);