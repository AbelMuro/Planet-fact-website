import React, {useEffect} from 'react';
import styles from './styles.module.css';
import {useSelector} from 'react-redux';

function MobileButtons({selectedButton, setSelectedButton}) {
    const theme = useSelector(state => state.theme);

    const handleClick = (e) => {
        if(!e.target.matches('button')) return;
        let id = e.target.getAttribute('data-id');
        setSelectedButton(id)
    }

    useEffect(() => {
        let lines = document.querySelectorAll('.' + styles.line);
        lines.forEach((line) => {
            line.style.backgroundColor = theme;
        })
    }, [theme])


    useEffect(() => {
        let buttons = document.querySelectorAll('.' + styles.button);


        buttons.forEach((button) => {
            button.style.color = '';
            button.nextElementSibling.style.opacity = '';
        })

        buttons.forEach((button) => {
            let id = button.getAttribute('data-id');
            if(selectedButton === id){
                button.style.color = 'white';
                button.nextElementSibling.style.opacity = '1';
            }
        })
    }, [selectedButton])

    return(
        <ul className={styles.buttons} onClick={handleClick}>
            <li>
                <button className={styles.button} data-id='overview'>
                    overview
                </button>    
                <div className={styles.line}></div>            
            </li>
            <li>
                <button className={styles.button} data-id='structure'>
                    structure
                </button>       
                <div className={styles.line}></div>            
            </li>
            <li>
                <button className={styles.button} data-id='surface'>
                    surface
                </button>       
                <div className={styles.line}></div>                 
            </li>

        </ul>
    )
}

export default MobileButtons;