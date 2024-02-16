import React from 'react';
import { Link } from 'react-router-dom'
import BannerImage from '../assets/pizza.jpeg';
import '../styles/Home.css';
import { motion } from 'framer-motion'

const Home = () => {
    return (
        <motion.div
            className='home'
            style={{ backgroundImage: `url(${BannerImage})` }}

            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: 0, transition: { duration: 0.2 } }}
        >
            <div className="headerContainer">
                <h1>Pedro's pizza</h1>
                <p>PIZZA TO FIT ANY TASTE</p>
                <Link to='/menu'>
                    <button>ORDER NOW</button>
                </Link>
            </div>
        </motion.div>
    )
}

export default Home