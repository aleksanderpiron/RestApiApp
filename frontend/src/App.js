import React, {Component} from 'react';
import Nav from './components/Nav/Nav';
import './App.css';
import Home from './pages/Home/Home';
import CartPage from './pages/CartPage/CartPage';
import ProductList from './pages/ProductList/ProductList';
import LoginModal from './components/Modals/LoginModal/LoginModal';
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group';
import Notif from './components/Notification/Notif';
import isLogged from './components/Utils/isLogged';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CartSidebar from './components/Cart/CartSidebar';

class App extends Component {
  state={
    loginModalShowed:false,
    cartSidebarShowed:true,
    isLogged:false,
  }
  toggleState=(set, to)=>{
    this.setState({
      [set]:to
    })
  }
  pushNotif=(type, message, lifeTime)=>{
    this.refs.notif.create(type, message, lifeTime);
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
    localStorage.removeItem('userName');
    this.pushNotif('info','You have logged out',5000);
    this.checkIfLogged();
  }
  UNSAFE_componentWillMount=()=>{
    this.checkIfLogged();
  }
  render(){
    return (
      <BrowserRouter>
        <div className="App">
            <Nav cartSidebarShowed={this.state.cartSidebarShowed} logout={this.logoutHandler} isLogged={this.state.isLogged} toggleState={this.toggleState}/>
            <ReactCSSTransitionGroup component="div" transitionEnterTimeout={400}   transitionLeaveTimeout={400} transitionName="modal-show">
              {this.state.loginModalShowed && !this.state.isLogged && <LoginModal login=  {this.checkIfLogged} pushNotif={this.pushNotif} toggleState={this.toggleState}  />}
            </ReactCSSTransitionGroup>
            <ReactCSSTransitionGroup component="div" className="pages" transitionEnterTimeout={400}   transitionLeaveTimeout={400} transitionName="page-switch">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/products" render={()=>
                  <ProductList pushNotif={this.pushNotif}/>
                }/>
                <Route exact path="/cart" component={CartPage} />
              </Switch>
            </ReactCSSTransitionGroup>
            <Notif ref='notif'/>
          <ReactCSSTransitionGroup component="div" transitionEnterTimeout={400}   transitionLeaveTimeout={400} transitionName="cart-sidebar">
            {this.state.isLogged && this.state.cartSidebarShowed && <CartSidebar toggleState={this.toggleState}/>}
          </ReactCSSTransitionGroup>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
