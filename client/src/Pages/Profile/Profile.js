import React from 'react'
import {Outlet} from 'react-router-dom';
import Sidebar from './Sidebar';
import './Profile.css'

function Profile() {
  return (
    <div className='profile-container'>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default Profile