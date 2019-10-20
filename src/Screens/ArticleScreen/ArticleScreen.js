import React, {useState, useEffect} from 'react'
import * as firebase from "firebase";
import {connectFirebase} from "../../FirebaseConnect/FirebaseConnect";
import styles from './Article.module.scss'
import img from '../../assets/1.jpg'
import Tags from "../../Components/Tags/Tags";

const ArticleScreen = (props) => {

	connectFirebase();

	const articleId = props.location.search.slice(4);
	const [article, setArticle] = useState(undefined);
	const getArticle = () => {
		firebase.database().ref().on('value', (snap) => {
			let articles = snap.val();
			const tmp = (articles[articleId]);
			console.log(tmp);
			const jsx = [];
			jsx.push(<div key="title" className={styles.title}>{tmp.title}</div>);
			jsx.push(<div key="author" className={styles.author}>Author: {tmp.author}</div>);
			jsx.push(<div key="date" className={styles.author}>Date: {tmp.date}</div>);
			jsx.push(<Tags key="tags" tags={tmp.tags.split(" ")}/>);
			jsx.push(<div key="main">{tmp.main}</div>);
			setArticle(jsx)
		})
	};

	useEffect(() => {
		if (article === undefined) {
			getArticle();
		}
	});

	return (
		<div className={styles.container}>
			<div className={styles.article}>
				<img src={img} alt={"description"}/>
				{article}
			</div>
		</div>
	)
};

export default ArticleScreen;