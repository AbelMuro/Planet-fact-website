import React, {useEffect, useState, useRef} from 'react';
import styles from './styles.module.css';
import icons from './icons';
import {useDispatch} from 'react-redux';
import {motion, AnimatePresence} from 'framer-motion';
import {menuItems, menu} from './Variants';

function MobileNavBar() {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const menuRef = useRef();
    const menuButtonRef = useRef();

    const handleLink = (e) => {
        if(!e.target.matches('button')) return;
        let planet = e.target.getAttribute('data-planet');
        let theme = e.target.getAttribute('data-theme');
        dispatch({type: 'UPDATE_PLANET', payload: {planet, theme}});
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(!open);
    }

    useEffect(() => {
        if(open){
            menuButtonRef.current.style.backgroundColor = 'rgba(255, 255, 255, 0.2487)';
            setTimeout(() => {
                if(!menuRef.current) return;
                menuRef.current.style.backgroundColor = '#070724';                
            }, 10)
        }
        else{
            if(!menuButtonRef.current) return;
            menuButtonRef.current.style.backgroundColor = '';
        }
    }, [open])

    return(
        <>
            <nav className={styles.nav}>
                <h1 className={styles.nav_logo}>
                    The Planets
                </h1>
                <button type='button' className={styles.nav_menu} onClick={handleOpen} ref={menuButtonRef}></button>
            </nav>        
            <AnimatePresence>
                {open && 
                <motion.menu 
                    className={styles.nav_dropdown} 
                    initial='hidden' 
                    animate='visible'
                    exit='exit' 
                    ref={menuRef} 
                    variants={menu}>
                        <motion.ul 
                            className={styles.nav_buttons} 
                            initial='hidden' 
                            animate='visible' 
                            exit='exit'
                            variants={menuItems}
                            onClick={handleLink}>
                            <motion.li variants={menuItems}>
                                <button className={styles.nav_button} data-planet='mercury' data-theme='#419EBB'>
                                    <div>
                                        Mercury
                                    </div>
                                    <img className={styles.arrow} src={icons['arrow']}/>
                                </button> 
                            </motion.li>
                            <motion.li variants={menuItems}>
                                <button className={styles.nav_button} data-planet='venus' data-theme='#EDA249'>
                                    <div>
                                        venus
                                    </div>
                                    <img className={styles.arrow} src={icons['arrow']}/>
                                </button> 
                            </motion.li>
                            <motion.li variants={menuItems}>
                                <button className={styles.nav_button} data-planet='earth' data-theme='#6D2ED5'>
                                    <div>
                                        earth
                                    </div>
                                    <img className={styles.arrow} src={icons['arrow']}/>
                                </button> 
                            </motion.li>
                            <motion.li variants={menuItems}>
                                <button className={styles.nav_button} data-planet='mars' data-theme='#D14C32'>
                                    <div>
                                    mars 
                                    </div>
                                    <img className={styles.arrow} src={icons['arrow']}/>
                                </button> 
                            </motion.li>
                            <motion.li variants={menuItems}>
                                <button className={styles.nav_button} data-planet='jupiter' data-theme='#D83A34'>
                                    <div>
                                        jupiter
                                    </div> 
                                    <img className={styles.arrow} src={icons['arrow']}/>
                                </button> 
                            </motion.li>
                            <motion.li variants={menuItems}>
                                <button className={styles.nav_button} data-planet='saturn' data-theme='#CD5120'>
                                    <div>
                                        saturn
                                    </div>
                                    <img className={styles.arrow} src={icons['arrow']}/>
                                </button> 
                            </motion.li>
                            <motion.li variants={menuItems}>
                                <button className={styles.nav_button} data-planet='uranus' data-theme='#1EC1A2'>
                                    <div>
                                    uranus 
                                    </div>
                                    <img className={styles.arrow} src={icons['arrow']}/>
                                </button> 
                            </motion.li>
                            <motion.li variants={menuItems}>
                                <button className={styles.nav_button} data-planet='neptune' data-theme='#2D68F0'>
                                    <div>
                                        neptune
                                    </div>
                                    <img className={styles.arrow} src={icons['arrow']}/>
                                </button> 
                            </motion.li>
                        </motion.ul>
                </motion.menu>}                
            </AnimatePresence>

        </>

    )
}

export default MobileNavBar;