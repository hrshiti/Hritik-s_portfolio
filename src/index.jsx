import React from 'react'
import ReactDOM from 'react-dom/client'


import App from './App'
// import {
// 	createBrowserRouter,
// 	RouterProvider,
// } from "react-router-dom";




	// {
	// 	path: "/",
	// 	element: <App />,
	// },
	// {
	// 	path: "navbar",
	// 	element: <Navbar />,
	// },
	// {
	// 	path: "home",
	// 	element: <Home />,
	// },



ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* <RouterProvider router={router} /> */}
		<App />
	</React.StrictMode>
)