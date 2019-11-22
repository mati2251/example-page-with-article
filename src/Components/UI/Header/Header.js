import React from 'react';
import styles from './Header.module.scss'
import Item from '../Items/Item/Item'
import Items from "../Items/Items";

const Header = (props) => {
    return (
        <div className={styles.container}>
            <Item title="LOGO" toLink="/example-page-with-articles"/>
            <div className={styles.itemContainer}>
                <Items/>
            </div>
            {props.children}
        </div>
    )
};

export default Header;