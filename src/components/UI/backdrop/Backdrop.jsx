import React from 'react';
import { createPortal } from 'react-dom';
import styles from './Backdrop.module.css';

const Backdrop = ({ open, onClose, animationClass }) => {
	if (!open) {
		return null;
	}

	return (
		<>
			{createPortal(
				<div
					className={`${styles.backdrop} ${styles[animationClass]}`}
					onClick={onClose}
				/>,
				document.getElementById('backdrop')
			)}
		</>
	);
};

export default Backdrop;
