import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Main from './pages/Main'
import Login from './pages/Login'
import Popup from './pages/VetPopup'
import Search from './pages/Search'
import Register from './pages/Register'
import RegisterVet from './pages/RegisterVet'
import FAQ from './pages/FAQ'
import HeaderComponent from './pages/components/HeaderComponent'
import MapVet from './pages/MapVet'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
    return (
        <>
        <Routes data-testid={'app-test'}>
            <Route
                path="/"
                element={
                    <>
                        {' '}
                        <HeaderComponent /> <Main />{' '}
                    </>
                }
            ></Route>
            <Route
                path="/emergency"
                element={
                    <>
                        {' '}
                        <HeaderComponent /> <MapVet />{' '}
                    </>
                }
            ></Route>
            <Route
                path="/search"
                element={
                    <>
                        {' '}
                        <HeaderComponent /> <Search />{' '}
                    </>
                }
            ></Route>
            <Route
                path="/login"
                element={
                    <>
                        {' '}
                        <HeaderComponent /> <Login />{' '}
                    </>
                }
            ></Route>
            <Route
                path="/register"
                element={
                    <>
                        {' '}
                        <HeaderComponent /> <Register />{' '}
                    </>
                }
            ></Route>
            <Route
                path="/Popup"
                element={
                    <>
                        {' '}
                        <Popup />{' '}
                    </>
                }
            ></Route>
            <Route
                path="/RegisterVet"
                element={
                    <>
                        {' '}
                        <HeaderComponent /> <RegisterVet />{' '}
                    </>
                }
            ></Route>
            <Route
                path="/faq"
                element={
                    <>
                        {' '}
                        <HeaderComponent /> <FAQ />{' '}
                    </>
                }
            ></Route>
        </Routes>
        <ToastContainer />
        </>
    )
}

export default App
