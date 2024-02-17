import React, {useState, useEffect, useRef} from 'react';
import styles from './styles.module.css';
import images from './images';
import icons from './icons';
import {useSelector} from 'react-redux';
import data from './data';

function Planet() {
    const selectedPlanet = useSelector(state => state.planet);
    const theme = useSelector(state => state.theme);
    const [planetData, setPlanetData] = useState({})
    const [selectedButton, setSelectedButton] = useState('01');
    const allButtonsRef = useRef();

    const handleImage = (e) => {
        if(!e.target.matches('button')) return;
        let id = e.target.getAttribute('data-id');
        setSelectedButton(id);
    }

    const setImage = () => {
        if(selectedButton === '02')
            return images[`${selectedPlanet}Internal`];
        else   
            return images[selectedPlanet]
    }

    useEffect(() => {
        const allButtons = allButtonsRef.current.children;
        Array.from(allButtons).forEach((button) => {
            button.style.backgroundColor = '';
        })
        Array.from(allButtons).forEach((button) => {
            let id = button.getAttribute('data-id');
            if(selectedButton === id)
                button.style.backgroundColor = theme
        })
    }, [selectedButton, theme])

    useEffect(() => {
        data.some((planet) => {
            if(planet.name.toLowerCase() === selectedPlanet){
                setPlanetData(planet);
                return true;
            }
            else
                return false;
        })

    }, [selectedPlanet])

    return(
        <article className={styles.planet}>
            <section className={styles.planet_content}>
                <div className={styles.planet_imageContainer}>
                    <img className={styles.planet_image} src={setImage()} />   
                    {selectedButton === '03' && <img className={styles.planet_geology} src={icons[selectedPlanet]}/>}
                </div>
                <div className={styles.planet_details}>
                    <h1 className={styles.planet_title}>
                        {planetData.name && planetData.name}
                    </h1>
                    <p className={styles.planet_desc}>
                        {planetData.overview && planetData.overview.content}
                    </p>
                    <div className={styles.planet_link}>
                        Source : 
                        <a href={planetData.overview && planetData.overview.source}> Wikipedia</a>
                        <img className={styles.square_icon} src={icons['linkSquare']}/>
                    </div>
                    <div className={styles.planet_buttons} onClick={handleImage} ref={allButtonsRef}>
                        <button className={styles.planet_button} data-id='01'>
                            <span>
                                01
                            </span>
                            overview
                        </button>
                        <button className={styles.planet_button} data-id='02'>
                            <span>
                                02
                            </span>
                            internal structure
                        </button>
                        <button className={styles.planet_button} data-id='03'>
                            <span>
                                03
                            </span>
                            surface geology
                        </button>
                    </div>                    
                </div>
            </section>
            <section className={styles.planet_additionalInfo}>
                <div className={styles.planet_info}>
                    <h2>
                        rotation time
                    </h2>
                    <strong>
                        {planetData.rotation && planetData.rotation}
                    </strong>
                </div>
                <div className={styles.planet_info}>
                    <h2>
                        revolution time
                    </h2>
                    <strong>
                        {planetData.revolution && planetData.revolution}
                    </strong>
                </div>
                <div className={styles.planet_info}>
                    <h2>
                        radius
                    </h2>
                    <strong>
                        {planetData.radius && planetData.radius}
                    </strong>
                </div>
                <div className={styles.planet_info}>
                    <h2>
                        average temp
                    </h2>
                    <strong>
                        {planetData.temperature && planetData.temperature}
                    </strong>
                </div>
            </section>
        </article>
    )
}

export default Planet;