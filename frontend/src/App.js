import React, {Component} from 'react';
import Nav from './components/Nav/Nav';
import './App.css';
import Home from './pages/Home/Home';
import AddProduct from './pages/AddProduct/AddProduct';
import ProductList from './pages/ProductList/ProductList';
import LoginModal from './components/Modals/LoginModal/LoginModal';
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group';
import Notif from './components/Notification/Notif';
import isLogged from './components/Utils/isLogged';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

class App extends Component {
  state={
    loginModalShowed:false,
    isLogged:false,
  }
  toggleLoginModal=(setTo)=>{
    this.setState({
      loginModalShowed:setTo
    })
  }
  pushNotif=(type, message, lifeTime)=>{
    this.refs.notif.create(type, message, lifeTime)
  }
  checkIfLogged=()=>{
    const logged = isLogged();
    this.setState({
      isLogged:logged
    })
  }
  logoutHandler=()=>{
    localStorage.removeItem('authToken');
    localStorage.removeItem('tokenExpirationDate');
    localStorage.removeItem('userId');
    this.checkIfLogged();
  }
  componentWillMount=()=>{
    this.checkIfLogged();
  }
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Nav logout={this.logoutHandler} isLogged={this.state.isLogged} toggleLoginModal={this.toggleLoginModal}/>
          <ReactCSSTransitionGroup component="div" transitionEnterTimeout={400} transitionLeaveTimeout={400} transitionName="modal-show">
            {this.state.loginModalShowed && !this.state.isLogged && <LoginModal login={this.checkIfLogged} pushNotif={this.pushNotif} toggleLoginModal={this.toggleLoginModal}/>}
          </ReactCSSTransitionGroup>
          <ReactCSSTransitionGroup component="div" className="pages" transitionEnterTimeout={400} transitionLeaveTimeout={400} transitionName="page-switch">
            <Switch>z
              <Route exact path="/">
                <Home/>
              </Route>
              <Route exact path="/products">
                <ProductList pushNotif={this.pushNotif}/>
              </Route>
              <Route path="/add-product">
                <AddProduct pushNotif={this.pushNotif}/>
              </Route>
            </Switch>
          </ReactCSSTransitionGroup>
          <Notif ref='notif'/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
