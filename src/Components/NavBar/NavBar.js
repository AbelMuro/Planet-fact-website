import React from 'react';
import styles from './styles.module.css';
import MobileNavBar from './MobileNavBar';
import useMediaQuery from '~/Hooks/useMediaQuery.js';

function NavBar(){
    const [mobile] = useMediaQuery('(max-width: 600px)');

    return mobile ? <MobileNavBar /> :
        <nav className={styles.nav}>
            <section className={styles.nav_content}>
               <h1 className={styles.nav_logo}>
                    The Planets
               </h1> 
                <ul className={styles.nav_links}>
                    <li>                   
                        <a className={styles.nav_link} data-id='mercury'>
                            mercury
                        </a>
                        <div className={styles.nav_line}></div> 
                    </li>
                    <li>                    
                        <a className={styles.nav_link} data-id='venus'>
                            venus
                        </a>
                        <div className={styles.nav_line}></div>
                    </li>
                    <li>                          
                        <a className={styles.nav_link} data-id='earth' >
                            earth
                        </a>
                        <div className={styles.nav_line}></div>
                    </li>
                    <li>                     
                        <a className={styles.nav_link} data-id='mars'>
                            mars
                        </a>
                        <div className={styles.nav_line}></div>
                    </li>
                    <li>                     
                        <a className={styles.nav_link} data-id='jupiter'>
                            jupiter
                        </a>
                        <div className={styles.nav_line}></div>
                    </li>
                    <li>                     
                        <a className={styles.nav_link} data-id='saturn' >
                            saturn
                        </a>
                        <div className={styles.nav_line}></div>
                    </li>
                    <li>
                        <a className={styles.nav_link} data-id='uranus' >
                            uranus
                        </a>
                        <div className={styles.nav_line}></div>
                    </li>
                    <li>   
                        <a className={styles.nav_link} data-id='neptune' >
                            neptune
                        </a>
                        <div className={styles.nav_line}></div> 
                    </li>                        
                </ul>                
            </section>

        </nav>
    
}

export default NavBar;