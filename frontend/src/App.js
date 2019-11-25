import React, {Component} from 'react';
import Nav from './components/Nav/Nav';
import './App.css';
import Home from './pages/Home/Home';
import AddProduct from './pages/AddProduct/AddProduct';
import ProductList from './pages/ProductList/ProductList';
import LoginModal from './components/Modals/LoginModal/LoginModal';
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group';
import Notif from './components/Notification/Notif';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

class App extends Component {
  state={
    loginModalShowed:false,
    pushNotifData:null,
  }
  toggleLoginModal=(setTo)=>{
    this.setState({
      loginModalShowed:setTo
    })
  }
  pushNotif=(type, message, lifeTime)=>{
    this.refs.notif.create(type, message, lifeTime)
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
