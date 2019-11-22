import React, {Component} from 'react';
import Nav from './components/Nav/Nav';
import './App.css';
import AddProduct from './pages/AddProduct/AddProduct';
import ProductList from './pages/ProductList/ProductList';
import LoginModal from './components/Modals/LoginModal/LoginModal';
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

class App extends Component {
  state={
    loginModalShowed:true
  }
  toggleLoginModal=(setTo)=>{
    this.setState({
      loginModalShowed:setTo
    })
  }
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Nav toggleLoginModal={this.toggleLoginModal}/>
          <ReactCSSTransitionGroup component="div" transitionEnterTimeout={400} transitionLeaveTimeout={400} transitionName="modal-show">
            {this.state.loginModalShowed && <LoginModal toggleLoginModal={this.toggleLoginModal}/>}
          </ReactCSSTransitionGroup>
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
