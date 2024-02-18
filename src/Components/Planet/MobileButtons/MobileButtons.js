import React, {useEffect} from 'react';
import styles from './styles.module.css';
import {useSelector} from 'react-redux';

function MobileButtons({setSelectedButton}) {
    const theme = useSelector(state => state.theme);

    const handleClick = (e) => {
        if(!e.target.matches('button')) return;

        let id = e.target.getAttribute('data-id');
        setSelectedButton(id)
    }

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
        <ul className={styles.buttons} onClick={handleClick}>
            <li>
                <button className={styles.button} onMouseEnter={handleEnter} onMouseLeave={handleLeave} data-id='overview'>
                    overview
                </button>    
                <div className={styles.line}></div>            
            </li>
            <li>
                <button className={styles.button} onMouseEnter={handleEnter} onMouseLeave={handleLeave} data-id='structure'>
                    structure
                </button>       
                <div className={styles.line}></div>            
            </li>
            <li>
                <button className={styles.button} onMouseEnter={handleEnter} onMouseLeave={handleLeave} data-id='surface'>
                    surface
                </button>       
                <div className={styles.line}></div>                 
            </li>

        </ul>
    )
}

export default MobileButtons;