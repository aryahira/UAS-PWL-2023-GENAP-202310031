import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../modules/components/Page/Home/Home'
import Error from '../modules/components/Page/Error/Error'
import Exercises from '../modules/components/Exercises/Exercises'
import Member from '../modules/components/Page/Member/Member'
import Login from '../modules/components/Page/User/Login/Login'
import SignUp from '../modules/components/Page/User/SignUp/SignUp'
import PullUp from '../modules/components/ProgramClass/PullUp'

export default function BasePages() {
  return (
    <Routes>
      
            <Route index element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='/exercises' element={<Exercises />} />
            <Route path='/member' element={<Member />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/pullup' element={<PullUp />} />
            <Route path='*' element={<Error />} />

        </Routes>
  )
}