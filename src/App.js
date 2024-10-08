import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes';

function App() {
	return (
		<div className='container'>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
