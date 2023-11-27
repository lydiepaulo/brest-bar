// Modal.jsx
import React, { useState, useEffect } from 'react';
import { LiaTimesSolid } from 'react-icons/lia';
import styles from '../styles/Modal.module.css';

export default function Modal({ showModal, closeModal }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(showModal);
    }, [showModal]);

    return (
        <div className={`${visible ? styles.show : ''} ${styles.modal} ui-primary tx-inverted !absolute top-0 bottom-0 left-0 right-0 m-[auto] w-fit h-[fit-content] z-20 flex items-center gap-4 rounded-xl bg-bg p-4`}>
            <h2 className="subtitle">Demande</h2>
            <button className="ui-secondary p-2 rounded-xl" onClick={closeModal}>
                <LiaTimesSolid className="h-6 w-6" />
            </button>
        </div>
    );
}
