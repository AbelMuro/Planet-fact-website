import React, {useEffect} from 'react';
import styles from './styles.module.css';
import {useSelector} from 'react-redux';

function MobileButtons() {
    const theme = useSelector(state => state.theme);

    const handleEnter = (e) => {
        let line = e.target.nextElementSibling;
        line.style.opacity = '1'
    }

    const handleLeave = (e) => {
        let line = e.target.nextElementSibling;
        line.style.opacity = '';
    }

    useEffect(() => {
        let lines = document.querySelectorAll('.' + styles.line);

        lines.forEach((line) => {
            line.style.backgroundColor = theme
        })
    }, [theme])

    return(
        <ul className={styles.buttons}>
            <li>
                <button className={styles.button} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                    overview
                </button>    
                <div className={styles.line}></div>            
            </li>
            <li>
                <button className={styles.button} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                    structure
                </button>       
                <div className={styles.line}></div>            
            </li>
            <li>
                <button className={styles.button} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                    surface
                </button>       
                <div className={styles.line}></div>                 
            </li>

        </ul>
    )
}

export default MobileButtons;