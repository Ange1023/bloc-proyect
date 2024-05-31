import React from 'react';

const Modal = ({ show, onClose, children }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <button onClick={onClose}>Cerrar</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;