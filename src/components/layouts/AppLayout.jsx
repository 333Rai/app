import React from 'react';
import Header from '../header/Header';
import Footer from './footer/Footer';

const AppLayout = ({ children }) => {
	return (
		<>
			<Header />
			<main className='wrapper'>{children}</main>
			<Footer />
		</>
	);
};

export default AppLayout;
