import React from 'react';
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import styles from './Layout.module.scss'

const Layout = () => {
    return (<React.Fragment>
        <div className={styles.sidebar}>
            <Sidebar/>
        </div>
        <div className={styles.header}>
            <Header/>
        </div>
    </React.Fragment>)
};

export default Layout;