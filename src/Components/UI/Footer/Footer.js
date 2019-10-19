import React from 'react';
import styles from './Footer.module.scss'
import {FaFacebook, FaInstagram, FaStrava} from "react-icons/fa";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.containerSocial}>
                    Social Media:
                    <div className={styles.marginLeft}>
                        <a className={styles.button} rel="noopener noreferrer"
                                href={'https://www.facebook.com'} target="_blank">
                            Facebook <FaFacebook className={styles.icon}/>
                        </a>
                        <a className={styles.button} rel="noopener noreferrer"
                                href={'https://www.instagram.com'} target="_blank">
                            Instagram <FaInstagram className={styles.icon}/>
                        </a>
                        <a className={styles.button} rel="noopener noreferrer"
                                href={'https://www.strava.com'} target="_blank">
                            Strava <FaStrava className={styles.icon}/>
                        </a>
                    </div>
                </div>
                <div>
                    Partners:
                    <div className={styles.partnersContainer}>
                        <div className={styles.partnersContainerElement}>
                            <a href="https://www.google.pl" className={styles.button}>Partner 1</a>
                            <a href="https://www.google.pl" className={styles.button}>Partner 2</a>
                            <a href="https://www.google.pl" className={styles.button}>Partner 3</a>
                            <a href="https://www.google.pl" className={styles.button}>Partner 4</a>
                        </div>
                        <div className={styles.partnersContainerElement}>
                            <a href="https://www.google.pl" className={styles.button}>Partner 5</a>
                            <a href="https://www.google.pl" className={styles.button}>Partner 6</a>
                            <a href="https://www.google.pl" className={styles.button}>Partner 7</a>
                            <a href="https://www.google.pl" className={styles.button}>Partner 8</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                ALL RIGHT RESERVED
            </div>
        </div>
    )
};

export default Footer;