import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Success from './pages/Success.jsx'
import Registration from './pages/Registration.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },{
        path: "/success",
        element: <Success />,
    },
    {
        path:"/register",
        element: <Registration />
    }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
