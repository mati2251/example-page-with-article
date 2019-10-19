import React from 'react';
import styles from './Article.module.scss';
import Tag from './Tag/Tag'
import {Link} from "react-router-dom";

const Article = (props) => {
    const tags = props.tags.map((item, index) => {
        return <Tag key={index}>{item}</Tag>
    });
    return(
        <Link className={styles.article__container}>
            <img alt="article" src={props.image} className={styles.img}/>
            <header className={styles.article__title}>{props.header}</header>
            <div className={styles.article__tagsContainer}>Tags: {tags}</div>
            <div className={styles.article__author}>Author: {props.author}</div>
            <div className={styles.article__date}>{props.date}</div>
        </Link>
    )
};

export default Article;