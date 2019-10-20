import React, {useState, useEffect} from 'react';
import Article from "../../Components/Article/Article";
import styles from './Relations.module.scss'
import img from '../../assets/1.jpg'
import Tags from "../../Components/Tags/Tags";
import * as firebase from 'firebase';
import {connectFirebase} from "../../FirebaseConnect/FirebaseConnect";


const Relations = () => {

		connectFirebase();

		const [articleJSX, setArticleJSX] = useState(undefined);

		const [tags, setTags] = useState(["wait"]);

		const getData = () => {
			firebase.database().ref().on('value', (snap) => {
				let articles = snap.val();
				let article = [];
				const copyTags = [];
				for (let key in articles) {
					const tagsFromArticle = articles[key].tags.split(" ");
					tagsFromArticle.forEach(item => {
						if (copyTags.find(i => i === item) === undefined) {
							copyTags.push(item)
						}
					});
					article.push(<Article header={articles[key].title} image={img} tags={tagsFromArticle} id={key}
					                      author={articles[key].author} date={articles[key].date} key={key}/>);
				}
				if (article !== articleJSX) {
					setArticleJSX(article);
					setTags(copyTags)
				}
			});
		};

		useEffect(() => {
				if (articleJSX === undefined) {
					getData();
				}
			}
		);


		return (
			<div className={styles.container}>
				<header className={styles.header}>Relations</header>
				<div className={styles.main}>Welcome in relations</div>
				<Tags tags={tags}/>
				{articleJSX}
			</div>
		)
	}
;

export default Relations;