import React, {Component} from 'react';
import './App.scss';
import Layout from "./Components/UI/Layout/Layout";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutUs from "./Screens/AboutUs/AboutUs";
import Partners from "./Screens/Partners/Partners";
import Relations from "./Screens/Relations/Relations";
import Contact from "./Screens/Contact/Contact";
import Home from "./Screens/Home/Home";
import Footer from "./Components/UI/Footer/Footer";
import ArticleByTag from "./Screens/ArticleByTag/ArticleByTag";
import ArticleScreen from "./Screens/ArticleScreen/ArticleScreen";

class App extends Component {
    render() {
        return (
            <Router className="App">
                <Layout/>
                <Route path="/example-page-with-article/" exact component={Home}/>
                <Route path="/example-page-with-article/about/" component={AboutUs} />
                <Route path="/example-page-with-article/partners/" component={Partners} />
                <Route path="/example-page-with-article/relations/" component={Relations}/>
                <Route path="/example-page-with-article/contact/" component={Contact} />
                <Route path="/example-page-with-article/tags" component={ArticleByTag}/>
                <Route path="/example-page-with-article/article" component={ArticleScreen}/>
                <Footer/>
            </Router>
        );
    }
}

export default App;
