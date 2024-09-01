import React from 'react';
import styles from './HeaderMobile.module.css';

const HeaderMobile = () => {
	return (
		<header id={styles.header}>
			<div className='wrapper'>
				<header className={styles.header}>
					<nav className={styles.headerMobileNav}>
						<ul className={styles.headerMobileList}>
							<li className={styles.headerMobileItem}>
								<a href='#!' className={styles.headerMobileLink}>
									Home
								</a>
							</li>
							<li className={styles.headerMobileItem}>
								<a href='#!' className={styles.headerMobileLink}>
									Contacts
								</a>
							</li>
							<li className={styles.headerMobileItem}>
								<a href='#!' className={styles.headerMobileLink}>
									Settings
								</a>
							</li>
						</ul>
					</nav>
				</header>
			</div>
		</header>
	);
};

export default HeaderMobile;
