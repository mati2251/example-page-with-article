import React from 'react';
import Item from "./Item/Item";
import {withRouter} from 'react-router-dom'

const Items = (props) => {
    const {pathname} = props.location;
    const items = [{title: "RELATIONS", toLink: "/relations"},
        {title: "ABOUT US", toLink: "/example-page-with-article/about"},
        {title: "OUR PARTNERS", toLink: "/example-page-with-article/partners"},
        {title: "CONTACT", toLink: "/example-page-with-article/contact"}
    ];
    const tmp = items.map((item, index) => {
        if(item.toLink === pathname || item.toLink === pathname + "/"){
            return <Item toLink={item.toLink} title={item.title} onClick={props.onClick} isCheck={true} key={index}/>
        }
        return <Item toLink={item.toLink} onClick={props.onClick} title={item.title} key={index}/>
    });
    return tmp;
};

export default withRouter(Items);