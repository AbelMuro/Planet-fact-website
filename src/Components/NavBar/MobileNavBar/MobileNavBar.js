import React, {useEffect, useState, useRef} from 'react';
import styles from './styles.module.css';
import icons from './icons';
import {motion, AnimatePresence} from 'framer-motion';
import {menuItems, menu} from './Variants';

function MobileNavBar() {
    const [open, setOpen] = useState(false);
    const menuRef = useRef();
    const menuButtonRef = useRef();

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
            setTimeout(() => {
                menuButtonRef.current.style.backgroundColor = '';
            }, 1600)
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
                {open && <motion.menu className={styles.nav_dropdown} ref={menuRef} exit='exit' variants={menu}>
                    <motion.ul 
                        className={styles.nav_buttons} 
                        initial='hidden' 
                        animate='visible' 
                        exit='exit'
                        transition={{staggerChildren: 0.2}}
                        >
                        <motion.li variants={menuItems}>
                            <button className={styles.nav_button}>
                                <div>
                                    Mercury
                                </div>
                                <img className={styles.arrow} src={icons['arrow']}/>
                            </button> 
                        </motion.li>
                        <motion.li variants={menuItems}>
                            <button className={styles.nav_button}>
                                <div>
                                    venus
                                </div>
                                <img className={styles.arrow} src={icons['arrow']}/>
                            </button> 
                        </motion.li>
                        <motion.li variants={menuItems}>
                            <button className={styles.nav_button}>
                                <div>
                                    earth
                                </div>
                                <img className={styles.arrow} src={icons['arrow']}/>
                            </button> 
                        </motion.li>
                        <motion.li variants={menuItems}>
                            <button className={styles.nav_button}>
                                <div>
                                mars 
                                </div>
                                <img className={styles.arrow} src={icons['arrow']}/>
                            </button> 
                        </motion.li>
                        <motion.li variants={menuItems}>
                            <button className={styles.nav_button}>
                                <div>
                                    jupiter
                                </div> 
                                <img className={styles.arrow} src={icons['arrow']}/>
                            </button> 
                        </motion.li>
                        <motion.li variants={menuItems}>
                            <button className={styles.nav_button}>
                                <div>
                                    saturn
                                </div>
                                <img className={styles.arrow} src={icons['arrow']}/>
                            </button> 
                        </motion.li>
                        <motion.li variants={menuItems}>
                            <button className={styles.nav_button}>
                                <div>
                                uranus 
                                </div>
                                <img className={styles.arrow} src={icons['arrow']}/>
                            </button> 
                        </motion.li>
                        <motion.li variants={menuItems}>
                            <button className={styles.nav_button}>
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