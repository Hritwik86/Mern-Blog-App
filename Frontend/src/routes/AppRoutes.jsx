import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'
import Profile from '../pages/Profile'

import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';
import DashboardLayout from '../layouts/DashboardLayout';

const AppRoutes = () => {
  return (
    <Routes>

      {/* For MainLayout Routes */}
      <Route element={<MainLayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        </Route>

        {/* For AuthLayout Routes */}
        <Route element={<AuthLayout/>} >
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        </Route>

        {/* For DashBoard Layout Routes */}

        <Route element={<DashboardLayout/>} >

        <Route path='/dashboard' element={<Dashboard/>}/>
        </Route>
        
    </Routes>
  )
}

export default AppRoutes