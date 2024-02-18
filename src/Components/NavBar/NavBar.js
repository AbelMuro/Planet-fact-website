import React, {useEffect} from 'react';
import styles from './styles.module.css';
import MobileNavBar from './MobileNavBar';
import useMediaQuery from '~/Hooks/useMediaQuery.js';
import {useDispatch, useSelector} from 'react-redux';

function NavBar(){
    const [mobile] = useMediaQuery('(max-width: 600px)');
    const theme = useSelector(state => state.theme);
    const dispatch = useDispatch();

    const handleLink = (e) => {
        if(!e.target.matches('a')) return;

        let planet = e.target.getAttribute('data-planet');
        let theme = e.target.getAttribute('data-theme')
        dispatch({type: 'UPDATE_PLANET', payload: {planet, theme}});
    }

    useEffect(() => {
        let lines = document.querySelectorAll('.' + styles.nav_line)

        lines.forEach((line) => {
            line.style.backgroundColor = theme
        })
    }, [theme])

    return mobile ? <MobileNavBar /> :
        <nav className={styles.nav}>
            <section className={styles.nav_content}>
               <h1 className={styles.nav_logo}>
                    The Planets
               </h1> 
                <ul className={styles.nav_links} onClick={handleLink}>
                    <li>                   
                        <a className={styles.nav_link} data-planet='mercury' data-theme='#419EBB'>
                            mercury
                        </a>
                        <div className={styles.nav_line}></div> 
                    </li>
                    <li>                    
                        <a className={styles.nav_link} data-planet='venus' data-theme='#EDA249'>
                            venus
                        </a>
                        <div className={styles.nav_line}></div>
                    </li>
                    <li>                          
                        <a className={styles.nav_link} data-planet='earth' data-theme='#6D2ED5'>
                            earth
                        </a>
                        <div className={styles.nav_line}></div>
                    </li>
                    <li>                     
                        <a className={styles.nav_link} data-planet='mars' data-theme='#D14C32'>
                            mars
                        </a>
                        <div className={styles.nav_line}></div>
                    </li>
                    <li>                      
                        <a className={styles.nav_link} data-planet='jupiter' data-theme='#D83A34'>
                            jupiter
                        </a>
                        <div className={styles.nav_line}></div>
                    </li>
                    <li>                     
                        <a className={styles.nav_link} data-planet='saturn' data-theme='#CD5120'>
                            saturn
                        </a>
                        <div className={styles.nav_line}></div>
                    </li>
                    <li>
                        <a className={styles.nav_link} data-planet='uranus' data-theme='#1EC1A2'>
                            uranus
                        </a>
                        <div className={styles.nav_line}></div>
                    </li>
                    <li>   
                        <a className={styles.nav_link} data-planet='neptune' data-theme='#2D68F0'>
                            neptune
                        </a>
                        <div className={styles.nav_line}></div> 
                    </li>                        
                </ul>                
            </section>

        </nav>
    
}

export default NavBar;