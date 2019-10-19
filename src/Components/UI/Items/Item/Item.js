import React from 'react';
import styles from './Item.module.scss'
import {Link} from "react-router-dom";

const Item = (props) => {
    if(props.isCheck === true){
        return(
            <Link className={styles.itemChecked} to={props.toLink} onClick={props.onClick}>{props.title} </Link>
        );
    }
    return(
        <Link className={styles.item} to={props.toLink}>{props.title} </Link>
    );
};

export default Item;