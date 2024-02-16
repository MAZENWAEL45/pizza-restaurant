import React from 'react';
import { MenuList } from '../helpers/MenuList';
import MenuItem from '../Components/MenuItem';
import '../styles/Menu.css';
import { motion } from 'framer-motion'

const Menu = () => {
    return (
        <motion.div className='menu'
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: 0, transition: { duration: 0.2 } }}
        >
            <h1 className="menuTitle">Our Menu</h1>
            <div className="menuList">
                {MenuList.map((product, key) => {
                    return <MenuItem image={product.image} name={product.name} price={product.price} key={key} />
                })}
            </div>
        </motion.div>
    )
}

export default Menu