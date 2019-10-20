import React from 'react';
import styles from './Article.module.scss';
import Tag from './Tag/Tag'
import {Link} from "react-router-dom";

const Article = (props) => {
	const tags = props.tags.map((item, index) => {
		return <Tag key={index}>{item}</Tag>
	});

	console.log(props.id);
	return (
		<div className={styles.article__container}>
			<Link to={"article?id=" + props.id} style={{all: "unset"}}>
				<img alt="article" src={props.image} className={styles.img}/>
				<header className={styles.article__title}>{props.header}</header>
			</Link>
			<div className={styles.article__tagsContainer}>Tags: {tags}</div>
			<Link to={"article?id=" + props.id} style={{all: "unset"}}>
				<div className={styles.article__author}>Author: {props.author}</div>
				<div className={styles.article__date}>{props.date}</div>
			</Link>
		</div>
	)
};

export default Article;