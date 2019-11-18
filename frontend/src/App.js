import React, {Component} from 'react';
import Nav from './components/Nav/Nav';
import './App.css';
import AddProduct from './pages/AddProduct/AddProduct';
import ProductList from './pages/ProductList/ProductList';
import Auth from './pages/Auth/Auth';
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

class App extends Component {
  state={
    currentPage:'ProductList',
  };
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Nav switchPageTo={this.switchPageTo} currentPage={this.state.currentPage}/>
            <ReactCSSTransitionGroup component="div" className="pages" transitionEnterTimeout={400} transitionLeaveTimeout={400} transitionName="page-switch">
              <Switch>
                <Route exact path="/products">
                  <ProductList />
                </Route>
                <Route path="/add-product">
                  <AddProduct />
                </Route>
                <Route path={['/login', '/register', '/reset-password']}>
                  <Auth />
                </Route>
              </Switch>
            </ReactCSSTransitionGroup>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
