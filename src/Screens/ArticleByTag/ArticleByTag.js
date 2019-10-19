import React, {useEffect, useState} from 'react'
import * as firebase from "firebase";
import Article from "../../Components/Article/Article";
import img from "../../assets/1.jpg";
import styles from "../Relations/Relations.module.scss";

const ArticleByTag = (props) => {
    const tag = props.location.search.slice(5);

    const [articleJSX, setArticleJSX] = useState(undefined);
    const getData = () => {
        firebase.database().ref().on('value', (snap) => {
            let articles = snap.val();
            let article = [];
            for (let key in articles) {
                const tagsFromArticle = articles[key].tags.split(" ");
                tagsFromArticle.forEach(item => {
                    if(item === tag){
                        article.push(<Article header={articles[key].title} image={img} tags={tagsFromArticle}
                                              author={articles[key].author} date={articles[key].date} key={key}/>);
                    }
                })
            }
            if (article !== articleJSX) {
                setArticleJSX(article);
            }
        });
    };

    useEffect(()=>{
       getData()
    });

    return(
        <div>
            <div className={styles.container}>
                <header className={styles.header}>Tag Nowe</header>
                {articleJSX}
            </div>
        </div>
    )
};

export default ArticleByTag;