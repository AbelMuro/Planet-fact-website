import React from 'react';
import styles from './styles.module.css';
import icons from './icons';


//i need to add a dot and the text inside another container within the buttons
function MobileNavBar() {
    return(
        <>
            <nav className={styles.nav}>
                <h1 className={styles.nav_logo}>
                    The Planets
                </h1>
                <button type='button' className={styles.nav_menu}></button>
            </nav>        
            <menu className={styles.nav_dropdown}>
                <ul className={styles.nav_buttons}>
                    <li>
                        <button className={styles.nav_button}>
                            <div></div>
                            Mercury
                            <img className={styles.arrow} src={icons['arrow']}/>
                        </button> 
                    </li>
                    <li>
                        <button className={styles.nav_button}>
                            <div></div>
                            venus
                            <img className={styles.arrow} src={icons['arrow']}/>
                        </button> 
                    </li>
                    <li>
                        <button className={styles.nav_button}>
                            <div></div>
                            earth
                            <img className={styles.arrow} src={icons['arrow']}/>
                        </button> 
                    </li>
                    <li>
                        <button className={styles.nav_button}>
                            <div></div>
                            mars
                            <img className={styles.arrow} src={icons['arrow']}/>
                        </button> 
                    </li>
                    <li>
                        <button className={styles.nav_button}>
                            <div></div> 
                            jupiter
                            <img className={styles.arrow} src={icons['arrow']}/>
                        </button> 
                    </li>
                    <li>
                        <button className={styles.nav_button}>
                            <div></div>
                            saturn
                            <img className={styles.arrow} src={icons['arrow']}/>
                        </button> 
                    </li>
                    <li>
                        <button className={styles.nav_button}>
                            <div></div>
                            uranus
                            <img className={styles.arrow} src={icons['arrow']}/>
                        </button> 
                    </li>
                    <li>
                        <button className={styles.nav_button}>
                            <div></div>
                            neptune
                            <img className={styles.arrow} src={icons['arrow']}/>
                        </button> 
                    </li>
                </ul>
            </menu>
        </>

    )
}

export default MobileNavBar;