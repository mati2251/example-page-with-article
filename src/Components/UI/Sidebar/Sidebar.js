import React, {useState} from 'react';
import {MdMenu, MdClose} from "react-icons/md";
import styles from './Sidebar.module.scss'
import Item from "../Items/Item/Item";
import Items from "../Items/Items";

const Sidebar = (props) => {
    const [barIsOpen, setBarIsOpen] = useState(styles.sidebarClose);
    return (
        <div className={styles.header}>
            <button className={styles.button} onClick={() => setBarIsOpen(styles.sidebarOpen)}>
                <MdMenu className={styles.icon}/>
            </button>
            <div className={styles.logoContainer}>
                <Item title="logo" toLink="/example-page-with-article" className={styles.logo}/>
            </div>
            <div className={barIsOpen}>
                <button className={styles.button + " " + styles.closeButton}
                        onClick={() => setBarIsOpen(styles.sidebarClose)}>
                    <MdClose className={styles.icon}/>
                </button>
                <div className={styles.items}>
                    <Items onClick={ () => setBarIsOpen(styles.sidebarClose)}/>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;