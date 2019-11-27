import React from 'react'
import Tag from "./Tag/Tag";
import styles from './Tag/Tags.module.scss'

const Tags = (props) => {
    const tags = props.tags.map((item, index)=>{
        return <Tag key={index} toLink={"/example-page-with-article/tags?tag=" + item}>{item}</Tag>
    });

    return(
        <div className={styles.tags__container}>
            <div className={styles.label}> Tags:</div>
            {tags}
        </div>
    );
};

export default Tags;