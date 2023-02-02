import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'
import { useDispatch } from 'react-redux';
import { deleteFavorite } from '../../actions';

const Modal = ({show, setShow, id, name}) => {
    const dispatch = useDispatch();
    return ReactDOM.createPortal(
        <div className='modal' >
            <h2>Are you sure to delete the character {name}?</h2>
            <button className='button' id={id} onClick={() => dispatch(deleteFavorite(id))}>Yes, sure</button>
            <button className='button' onClick={() => setShow(!show)}>No, I'm going think it for a while</button>
        </div>,
        document.getElementById("modal")
    )
}

export default Modal