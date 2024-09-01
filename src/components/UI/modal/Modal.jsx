import React from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

const Modal = ({ children = 'MODAL', open, onClose, animationClass }) => {
	if (!open) {
		return null;
	}

	return (
		<>
			{createPortal(
				<div
					className={`${styles.modal} ${styles[animationClass]}`}
					onClick={onClose}
				>
					{children}
				</div>,
				document.getElementById('modal')
			)}
		</>
	);
};

export default Modal;
