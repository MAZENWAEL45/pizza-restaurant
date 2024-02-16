import React from 'react';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import About from '../pages/About';
import Contacts from '../pages/Contact';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes = () => {
    const locaation = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />
                <Route path='/menu' element={<Menu />} />
                <Route path='/about' element={<About />} />
                <Route path='contact' element={<Contacts />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes