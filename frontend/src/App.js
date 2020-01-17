import React, {Component} from 'react';
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import Checkout from './pages/Checkout/Checkout';
import ProductList from './pages/Products/Products';
import LoginModal from './components/Modals/LoginModal/LoginModal';
import {CSSTransition} from 'react-transition-group';
import Notif from './components/Notification/Notif';
import isLogged from './components/Utils/isLogged';
import {BrowserRouter} from 'react-router-dom';
import {AnimatedRoute, AnimatedSwitch} from './components/Anims/AnimatedRouter';
import CartWidget from './components/Cart/CartWidget';
import UserPanel from './pages/Account/UserPanel'
import './App.css';

class App extends Component {
  state={
    loginModalShowed:false,
    cartWidgetShowed:false,
    isLogged:false,
    currentPage:''
  }
  toggleState=(set, to)=>{
    this.setState({
      [set]:to
    })
  }
  pushNotif=(type, message, lifeTime)=>{
    this.refs.notif.create(type, message, lifeTime);
  }
  setCurrentPage=(current)=>{
    this.setState({
      currentPage:current
    })
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
  refreshCartWidget=()=>{
    this.setState(prevState=>{
      return {refreshCartWidget:!prevState.refreshCartWidget}
    })
  }
  render(){
    return (
      <BrowserRouter>
        <div className="App">
            <CSSTransition
              appear={true}
              in={true}
              timeout={400}
              classNames="fade">
                <Nav
                  setCurrentPage={this.setCurrentPage}
                  logout={this.logoutHandler}
                  isLogged={this.state.isLogged}
                  toggleState={this.toggleState}/>
            </CSSTransition>
            <CSSTransition
              key='loginModal'
              in={this.state.loginModalShowed && !this.state.isLogged}
              unmountOnExit
              timeout={400}
              classNames="modal-show">
               <LoginModal login={this.checkIfLogged} pushNotif={this.pushNotif} toggleState={this.toggleState}/>
            </CSSTransition>
            <div className="pages">
              <AnimatedSwitch animationClassName="fade" animationTimeout={400}>
                <AnimatedRoute exact path="/" component={Home}/>
                <AnimatedRoute path="/products" render={()=>
                  <ProductList refreshCartWidget={this.refreshCartWidget} pushNotif={this.pushNotif}/>
                }/>
                <AnimatedRoute path="/checkout" component={Checkout}/>
                <AnimatedRoute path="/account" component={UserPanel}/>
              </AnimatedSwitch>
            </div>
            <Notif ref='notif'/>
            <CSSTransition
              unmountOnExit
              in={this.state.isLogged && this.state.cartWidgetShowed && this.state.currentPage !== '/checkout'}
              classNames='cart-widget'
              timeout={400}
              >
              <CartWidget refresh={this.state.refreshCartWidget} toggleState={this.toggleState}/>
            </CSSTransition>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
