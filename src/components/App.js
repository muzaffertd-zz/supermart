import React, {Component} from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import ProductFilters from './filters/ProductFilters';
import ProductList from './productList/ProductList';
import Cart from './cart/Cart';
import Alert from './alert/Alert';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        document.title = 'SuperMart';
    }
    render() { 
        return ( 
            <Router>
                <div className="main-content">
                    <Header />
                    <Alert />
                    <div className="container-fluid">
                        <Switch>
                            <Route exact path="/supermart">
                                <div className="row filter-block justify-content-center">
                                    <div className="col mt-4 mb-5">
                                        <ProductFilters />
                                    </div>
                                </div>
                                <div className="row">
                                    <ProductList />
                                </div>
                            </Route>
                            <Route path="/supermart/cart">
                                <div className="row ">
                                    <Cart />
                                </div>
                            </Route>
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </Router>
         );
    }
}


 
export default App;