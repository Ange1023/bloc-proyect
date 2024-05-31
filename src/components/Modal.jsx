/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Modal = ({ show, onClose, children }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal-backdrop">
            <div className="modal">
                {children}
                <button onClick={onClose}><img src="/closeIcon.svg" alt="Cerrar" /></button>
            </div>
        </div>
    );
};

export default Modal;