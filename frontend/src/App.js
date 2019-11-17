import React, {Component} from 'react';
import Nav from './components/Nav/Nav';
import Products from './pages/Products/Products';
import './App.css';
import AddProductForm from './components/Forms/AddProductForm';
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group';


class App extends Component {
  state={
    currentPage:'ProductList',
  };
  switchPageTo=(target)=>{
    let newPages = this.state.pages;
    newPages[this.state.pages.currentPage] = false;
    newPages[target] = true;
    newPages.currentPage = target;
    this.setState({
        pages:newPages
    })
  }
  render(){
    return (
      <div className="App">
        <Nav switchPageTo={this.switchPageTo} currentPage={this.state.currentPage}/>
        <ReactCSSTransitionGroup component='div' className="pages" timeout={500} transitionName="notif">
          {this.state.currentPage === 'AddProductForm' && <AddProductForm />}
          {this.state.currentPage === 'ProductList' && <Products />}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default App;
