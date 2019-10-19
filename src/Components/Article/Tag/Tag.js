import React from 'react'
import styles from './Tag.module.scss'
import {Link} from "react-router-dom";

const Tag = (props) => {
    return (
        <Link to={"/tags?tag=" + props.children} className={styles.tag}>
            {props.children}
        </Link>
    )
};

export default Tag;