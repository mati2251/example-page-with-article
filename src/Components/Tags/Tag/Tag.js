import React from 'react'
import styles from './Tags.module.scss'
import {Link} from "react-router-dom";

const Tag = (props) => {
    return (
        <Link to={props.toLink} className={styles.tag}>
            {props.children}
        </Link>
    )
};

export default Tag;