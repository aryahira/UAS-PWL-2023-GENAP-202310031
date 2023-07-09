import React from 'react'
import Footers from './components/footers/Footers'
import HeaderNav from './components/headers/HeaderNav'
import ModalPopUp from './components/modals/ModalPopUp'
import './Layouts.css';
import 'bootstrap/dist/css/bootstrap.css'

export default function Layouts(props) {
    return (
        <div id="main-layout">
            <HeaderNav />

            <main className='allmenu' >
                {props.children}
            </main>

            <Footers />
            <ModalPopUp />
        </div>
    )
}