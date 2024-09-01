import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import React, { useState } from 'react';
import styles from './LogInPage.module.css';

const LogInPage = () => {
	const [visibilityPassword, setVisibilityPassword] = useState(false);
	const togglePasswordInput = () =>
		setVisibilityPassword((prevState) => (prevState ? false : true));
	return (
		<div className={styles.login}>
			<form
				className={styles.login__form}
				onSubmit={(event) => event.preventDefault()}
			>
				<h1 className={styles.login__formTitle}>Login in account</h1>
				<label className={styles.login__formLabel}>
					Email:
					<input className={styles.login__formInput} type='email' />
				</label>
				<label className={styles.login__formLabel}>
					Password:
					<input
						className={styles.login__formInput}
						type={visibilityPassword ? 'text' : 'password'}
					/>
					<button
						className={styles.login__formVisibilityInput}
						onClick={togglePasswordInput}
					>
						{visibilityPassword ? (
							<VisibilityOutlinedIcon />
						) : (
							<VisibilityOffOutlinedIcon />
						)}
					</button>
				</label>
				<button className={styles.login__formButton}>Login</button>
			</form>
		</div>
	);
};

export default LogInPage;
