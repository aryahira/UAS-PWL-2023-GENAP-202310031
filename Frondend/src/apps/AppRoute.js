import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layouts from '../layouts/Layouts'
import BasePages from '../apps/BasePages'
import Payment from '../modules/components/Payment/Payment'

export default function AppRoute() {
    return (
        <Routes>
            <Route index element={<Navigate to='/home' />} />
            <Route path='/payment' element={<Payment/>}/>
            <Route path="*" element={<Layouts><BasePages /></Layouts>} />
        </Routes>
    )
}