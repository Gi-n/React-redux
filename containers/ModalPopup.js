import React, { Component } from 'react'
import {  Modal } from 'react-bootstrap';

class ModalPopup extends Component {

    constructor(props) {
        super(props);
        this.openModel = this.openModel.bind(this);
        this.closeModel = this.closeModel.bind(this)
        this.state = {
            show: false,
            note: null
        }
    }

    componentDidMount() {
        this.props.setModal(this.openModel);
        this.props.removeModal(this.closeModel);
    }

    handleClose = () => {
        this.setState({ show: false });
    }

    handleShow = () => this.setState({ show: true });


    openModel = (data) => {
        this.setState({ show: true, note: data });
    }

    closeModel = () => {
        this.setState({ show: false });
    }

    render() {
        const { title, content, actions, size } = this.props;

        return (
            <div>
                <Modal show={this.state.show} onHide={this.handleClose} backdrop="static"
                    keyboard={false} size={size}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered >
                    <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{content}</Modal.Body>
                    <Modal.Footer>
                        {actions}
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}


export default ModalPopup;
