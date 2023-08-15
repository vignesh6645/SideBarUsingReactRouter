import React from 'react';
import { SidebarData } from './SideBarData';
import Pagerouter from '../Pages/Pagerouter';

const NavBar = () => {
  return (

    <div className='Container'>

    <div className='Sidebar'>
      
      <ul className='Sidebarlist'>

        {SidebarData.map((val,key)=>{
          return <li key={key} 
                className='row'
                id={window.location.pathname === val.link ? "active":""}
                onClick={()=>{
                  window.location.pathname=val.link
                }} >

             <div id='icon'>{val.icon}</div>

             <div id='title'>{val.title}</div>

             </li>
        })}
        </ul>
    </div>
    <div className='RouterPage'>
    <Pagerouter />
    </div>
    </div>
  )
}

export default NavBar