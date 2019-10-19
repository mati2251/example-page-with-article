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

class App extends Component {
    render() {
        return (
            <Router className="App">
                <Layout/>
                <Route path="/" exact component={Home}/>
                <Route path="/about/" component={AboutUs} />
                <Route path="/partners/" component={Partners} />
                <Route path="/relations/" component={Relations}/>
                <Route path="/contact/" component={Contact} />
                <Route path="/tags" component={ArticleByTag}/>
                <Footer/>
            </Router>
        );
    }
}

export default App;
