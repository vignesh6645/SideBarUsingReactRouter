import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Root = () => {
  return (
   <>
    <div>
        <Link to="/"></Link>
        <Link to="/mailbox"></Link>
        <Link to="/analytics"></Link>
        <Link to="/dashboard"></Link>
        <Link to="/friends"></Link>
        <Link to="/images"></Link>

    </div>
    <div>
        <Outlet />
    </div>
   </>
  )
}

export default Root