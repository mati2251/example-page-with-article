import React, {useState, useEffect} from 'react';
import Article from "../../Components/Article/Article";
import styles from './Relations.module.scss'
import img from '../../assets/1.jpg'
import Tags from "../../Components/Tags/Tags";
import * as firebase from 'firebase';


const Relations = () => {

		const firebaseConfig = {
			apiKey: "AIzaSyCESSkTmp4lcauyiC7UG8DdA89gulO3gK8",
			authDomain: "relations-20efb.firebaseapp.com",
			databaseURL: "https://relations-20efb.firebaseio.com",
			projectId: "relations-20efb",
			storageBucket: "relations-20efb.appspot.com",
			messagingSenderId: "622631998349",
			appId: "1:622631998349:web:134c7f2ef7e1766fcf23c4",
			measurementId: "G-58EM5RQ8SQ"
		};
		if (!firebase.apps.length) {
			firebase.initializeApp(firebaseConfig);
		}

		const [articleJSX, setArticleJSX] = useState(undefined);

		const [tags, setTags] = useState(["wait"]);

		const getData = () => {
			firebase.database().ref().on('value', (snap) => {
				let articles = snap.val();
				let article = [];
				const copyTags = [];
				for (let key in articles) {
					const tagsFromArticle = articles[key].tags.split(" ");
					tagsFromArticle.forEach( item => {
						if(copyTags.find(i => i === item) === undefined) {
							copyTags.push(item)
						}
					});
					article.push(<Article header={articles[key].title} image={img} tags={tagsFromArticle}
					                      author={articles[key].author} date={articles[key].date} key={key}/>);
				}
				if (article !== articleJSX) {
					setArticleJSX(article);
					setTags(copyTags)
				}
			});
		};

		useEffect(() => {
				getData();
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