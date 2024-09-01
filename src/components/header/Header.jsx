import CallRoundedIcon from '@mui/icons-material/CallRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Backdrop from '../UI/backdrop/Backdrop';
import Modal from '../UI/modal/Modal';
import styles from './Header.module.css';
const Header = () => {
	const [open, setOpen] = useState(false);
	const [animationClass, setAnimationClass] = useState('');

	const showModal = () => setOpen(true);
	const hideModal = () => {
		setAnimationClass('closed');
		const modalId = setTimeout(() => {
			setOpen(false);
			setAnimationClass('');
		}, 500);

		return () => {
			clearTimeout(modalId);
		};
	};
	const checkActiveClassName = ({ isActive }) => {
		return isActive ? 'header__linkActive' : 'header__link';
	};

	return (
		<>
			<Backdrop
				open={open}
				onClose={hideModal}
				animationClass={animationClass}
			/>
			<Modal open={open} onClose={hideModal} animationClass={animationClass}>
				{'sss'}
			</Modal>
			<header id={styles.header}>
				<div className='wrapper'>
					<header className={styles.header}>
						<NavLink to='/' className={styles.header__logo}>
							Rai
						</NavLink>
						<nav className={styles.header__nav}>
							<ul className={styles.header__list}>
								<li className={styles.header__item}>
									<NavLink
										to='/'
										className={({ ...params }) =>
											styles[checkActiveClassName(params)]
										}
									>
										<HomeRoundedIcon />
										<span>Home</span>
									</NavLink>
								</li>
								<li className={styles.header__item}>
									<NavLink
										to='/contacts'
										className={({ ...params }) =>
											styles[checkActiveClassName(params)]
										}
									>
										<CallRoundedIcon />
										<span>Contacts</span>
									</NavLink>
								</li>
								<li className={styles.header__item}>
									<NavLink
										to='/settings'
										className={({ ...params }) =>
											styles[checkActiveClassName(params)]
										}
									>
										<SettingsRoundedIcon />
										<span>Settings</span>
									</NavLink>
								</li>
								<li className={styles.header__item}>
									<button
										className={styles.header__button}
										onClick={showModal}
									>
										<LocalMallOutlinedIcon
											style={{
												width: '30px',
												height: '30px',
												color: '#f3fcdf',
											}}
										/>
									</button>
								</li>
								<NavLink to='/login' className={styles.header__link}>
									<LoginOutlinedIcon
										style={{
											width: '30px',
											height: '30px',
											color: '#f3fcdf',
										}}
									/>
								</NavLink>
							</ul>
						</nav>
					</header>
				</div>
			</header>
		</>
	);
};

export default Header;
