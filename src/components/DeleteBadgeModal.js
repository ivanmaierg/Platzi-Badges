

import React from 'react'
import Modal from "./Modal";
import './styles/DeleteBadgeModal.css';
export default function DeleteBadgeModal(props) {
    return (<Modal isOpen={props.isOpen} onClose={props.onClose}>
        <div className="DeleteBadgeModal">
            <h1 className="m-auto">Are you Sure?</h1>
            <p className="m-auto">You are about to delete this badge.</p>
            <div className="m-auto">
                <button onClick={props.onDelete} className="btn btn-danger mr-4">Delete</button>
                <button onClick={props.onClose} className="btn btn-primary">Cancel</button>
            </div>
        </div>

    </Modal>)
}
