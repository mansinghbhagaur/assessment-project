import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromChildren } from 'react-router-dom'
import Home from '../pages/Home';


import About from '../pages/About';
import Layout from '../components/Layout';

export default function Routing() {
    const router = createBrowserRouter(
        createRoutesFromChildren(
            <Route path='/' element={<Layout />}>
                <Route path='' element={<Home />} />
                <Route path='/about' element={<About />} />
            </Route>
        )
    );
    return (
        <>
    
            <RouterProvider router={router} />
    
        </>
    )
}
