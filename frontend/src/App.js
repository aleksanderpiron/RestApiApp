import React, {Component} from 'react';
import Nav from './components/Nav/Nav';
import './App.css';
import AddProduct from './pages/AddProduct/AddProduct';
import ProductList from './pages/ProductList/ProductList';
import LoginModal from './components/Modals/LoginModal/LoginModal';
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Nav/>
          <LoginModal />
            <ReactCSSTransitionGroup component="div" className="pages" transitionEnterTimeout={400} transitionLeaveTimeout={400} transitionName="page-switch">
              <Switch>
                <Route exact path="/products">
                  <ProductList />
                </Route>
                <Route path="/add-product">
                  <AddProduct />
                </Route>
                {/* <Route path={['/login', '/register', '/reset-password']}>
                  <Auth />
                </Route> */}
              </Switch>
            </ReactCSSTransitionGroup>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
