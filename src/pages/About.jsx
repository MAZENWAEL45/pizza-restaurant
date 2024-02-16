import React from 'react';
import MultiplePizzas from '../assets/multiplePizzas.jpeg';
import { motion } from 'framer-motion'
import '../styles/About.css'

const About = () => {
    return (
        <motion.div
            className='about'
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: 0, transition: { duration: 0.2 } }}
        >
            <div className="aboutTop" style={{ backgroundImage: `url(${MultiplePizzas})` }}></div>
            <div className="aboutBottom">
                <h1>ABOUT US</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Quia odit aliquid nobis veritatis fugit a deleniti,
                    minus voluptatibus quos, iste dolorum rem porro impedit
                    reprehenderit assumenda error. Temporibus nostrum corrupti
                    id tenetur excepturi quisquam hic tempora ut
                    corporis? Voluptate necessitatibus porro omnis excepturi
                    pariatur ea veniam ad? Ea, laudantium voluptatibus.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur dolore cupiditate eaque? Illum sit in, eum animi
                    ut ipsam facilis?
                </p>
            </div>
        </motion.div>
    )
}

export default About