import React from 'react'
import { Outlet } from 'react-router-dom'
import TopHeader from '../Components/Header/TopHeader'
import Navbar from '../Components/Header/Navbar'
import Footer from '../Components/Footer/Footer'

const Root = () => {
    return (
        <>
            <div>
                {/* <TopHeader /> */}
                <Navbar />
                <Outlet />
                <Footer />
            </div>

        </>
    )
}

export default Root