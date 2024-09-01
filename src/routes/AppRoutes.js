import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ContactsPage from '../pages/contacts/ContactsPage';
import MainPage from '../pages/main/MainPage';
import RegisterPage from '../pages/register/RegisterPage';
import SettingsPage from '../pages/settings/SettingsPage';
import LogInPage from '../pages/login/LogInPage';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<MainPage />}>
				<Route />
			</Route>
			<Route path='/contacts' element={<ContactsPage />}></Route>
			<Route path='/settings' element={<SettingsPage />}></Route>
			<Route path='/register' element={<RegisterPage />}></Route>
			<Route path='/login' element={<LogInPage />}></Route>
		</Routes>
	);
};

export default AppRoutes;
