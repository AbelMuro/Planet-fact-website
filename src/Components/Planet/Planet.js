import React, {useState, useEffect, useRef} from 'react';
import MobileButtons from './MobileButtons';
import styles from './styles.module.css';
import images from './images';
import icons from './icons';
import {useSelector} from 'react-redux';
import data from './data';
import useMediaQuery from '~/Hooks/useMediaQuery.js';

function Planet() {
    const selectedPlanet = useSelector(state => state.planet);
    const theme = useSelector(state => state.theme);
    const [planetData, setPlanetData] = useState({});
    const [selectedButton, setSelectedButton] = useState('overview');
    const [mobile] = useMediaQuery('(max-width: 600px)');
    const [tablet] = useMediaQuery('(max-width: 840px)');
    const allButtonsRef = useRef();
    const planetImageRef = useRef();
    const planetGeologyImageRef = useRef();


    const setPlanetDesc = () => {
        if(!planetData.overview || !planetData.structure || !planetData.geology) return;

        if(selectedButton === 'overview')
            return planetData.overview.content;
        else if(selectedButton === 'structure')
            return planetData.structure.content;
        else   
            return planetData.geology.content;
    }

    const setSourceLink = () => {
        if(!planetData.overview || !planetData.structure || !planetData.geology) return;

        if(selectedButton === 'overview')
            return planetData.overview.source;
        else if(selectedButton === 'structure')
            return planetData.structure.source;
        else   
            return planetData.geology.source;
    } 

    const handleImage = (e) => {
        if(!e.target.matches('button')) return;
        let id = e.target.getAttribute('data-id');
        setSelectedButton(id);
    }

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

    useEffect(() => {
        if(selectedButton === 'structure')
            planetImageRef.current.style.backgroundImage = `url(${images[selectedPlanet + 'Internal']}`;
        else   
            planetImageRef.current.style.backgroundImage = `url(${images[selectedPlanet]}`;   

    }, [selectedPlanet, selectedButton])

    useEffect(() => {
        if(mobile) return;

        const allButtons = allButtonsRef.current.children;
        Array.from(allButtons).forEach((button) => {
            button.style.backgroundColor = '';
        })
        Array.from(allButtons).forEach((button) => {
            let id = button.getAttribute('data-id');
            if(selectedButton === id)
                button.style.backgroundColor = theme
        })
    }, [selectedButton, theme, mobile])

    useEffect(() => {
        if(!planetData.imageSizes || !planetImageRef.current) return;

        if(mobile){
            planetImageRef.current.style.width = planetData.imageSizes.mobile;  
            planetImageRef.current.style.height = '304px';
        }   
        else if(tablet){
            planetImageRef.current.style.width = planetData.imageSizes.tablet;    
            planetImageRef.current.style.height = '460px';
        }
        else {
            planetImageRef.current.style.height = planetData.imageSizes.desktop;
            planetImageRef.current.style.width = ''
        }
            
    }, [mobile, tablet, planetData])

    useEffect(() => {
        if(selectedPlanet !== 'saturn') return;
        if(!planetGeologyImageRef.current) return;

        if(!tablet && !mobile)
            planetGeologyImageRef.current.style.bottom = '20px';
        else    
            planetGeologyImageRef.current.style.bottom = '';
    }, [selectedPlanet, mobile, tablet])

    return(
        <>
            {mobile && <MobileButtons selectedButton={selectedButton} setSelectedButton={setSelectedButton}/>}
            <article className={styles.planet}>
                <section className={styles.planet_content}>
                    <div className={styles.planet_image} ref={planetImageRef}>
                        {selectedButton === 'surface' && <img className={styles.planet_geology} src={icons[selectedPlanet]} ref={planetGeologyImageRef}/>}
                    </div>
                    <div className={styles.planet_details}>
                        <h1 className={styles.planet_title}>
                            {planetData.name && planetData.name}
                        </h1>
                        <p className={styles.planet_desc}>
                            {setPlanetDesc()}
                        </p>
                        <div className={styles.planet_link}>
                            Source : 
                            <a target='_blank' href={setSourceLink()}> Wikipedia</a>
                            <img className={styles.square_icon} src={icons['linkSquare']}/>
                        </div>
                        {!mobile && <div className={styles.planet_buttons} onClick={handleImage} ref={allButtonsRef}>
                            <button className={styles.planet_button} data-id='overview'>
                                <span>
                                    01
                                </span>
                                overview
                            </button>
                            <button className={styles.planet_button} data-id='structure'>
                                <span>
                                    02
                                </span>
                                internal structure
                            </button>
                            <button className={styles.planet_button} data-id='surface'>
                                <span>
                                    03
                                </span>
                                surface geology
                            </button>
                        </div> }                   
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
        </>

    )
}

export default Planet;