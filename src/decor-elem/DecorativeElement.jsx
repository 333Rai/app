import React from 'react';
import styles from './DecorativeElement.module.css';

const DecorativeElement = ({ anchorOrigin, style }) => {
	const checkOrigin = () => {
		const verticalStyle = (() => {
			switch (anchorOrigin.vertical) {
				case 'top':
					return { top: 0 };
				case 'bottom':
					return { bottom: 0 };
				case 'center':
					return { top: '50%', transform: 'translateY(-50%)' };
				default:
					return {};
			}
		})();

		const horizontalStyle = (() => {
			if (
				anchorOrigin.vertical === 'center' &&
				anchorOrigin.horizontal === 'center'
			) {
				return {
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
				};
			}
			switch (anchorOrigin.horizontal) {
				case 'center':
					return { left: '50%', transform: 'translateX(-50%)' };
				case 'left':
					return { left: 0 };
				case 'right':
					return { right: 0 };
				default:
					return {};
			}
		})();

		return { ...verticalStyle, ...horizontalStyle };
	};
	return (
		<>
			<div
				id={styles.decorativeElement}
				style={{ ...checkOrigin(), ...style }}
			/>
		</>
	);
};

export default DecorativeElement;
