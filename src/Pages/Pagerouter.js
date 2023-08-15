import React from 'react'
import { Route, RouterProvider, createRoutesFromElements } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import Root from './Root';
import Home from './Home';
import MailBox from './MailBox';
import Analytics from './Analytics';
import DashBoard from './DashBoard';
import Friends from './Friends';
import Images from './Images';

const Pagerouter = () => {

    const pagerouter = createBrowserRouter(

        createRoutesFromElements(
            <Route path='/' element={<Root />}>

             <Route index element={<Home />} />
             <Route path='/mailbox' element={<MailBox />} />
             <Route path='/analytics' element={<Analytics />} />
             <Route path='/dashboard' element={<DashBoard />} />
             <Route path='/friends' element={<Friends />} />
             <Route path='/images' element={<Images />} />

            </Route>
        )

    );

  return (
    <div>
        <RouterProvider router={pagerouter} />
    </div>
  )
}

export default Pagerouter