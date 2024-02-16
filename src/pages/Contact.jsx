import React from 'react';
import PizzaLeft from '../assets/pizzaLeft.jpg';
import '../styles/Contact.css';
import { motion } from 'framer-motion'

const Contacts = () => {
    return (
        <motion.div className='contact'
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: 0, transition: { duration: 0.2 } }}
        >
            <div className="leftSide" style={{ backgroundImage: `url(${PizzaLeft})` }}></div>
            <div className="rightSide">
                <h1>Contact Us</h1>
                <form method='POST' id="contact-form">
                    <label htmlFor="name">Full name</label>
                    <input type="text" placeholder='Enter your name...' name='name' />
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder='Enter Email...' />
                    <label htmlFor="message">message</label>
                    <textarea rows="6" placeholder="Enter your message" name='message' required></textarea>

                    <button type='submit'>Submit</button>
                </form>
            </div>
        </motion.div>
    )
}

export default Contacts