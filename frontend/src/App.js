import React, {Component} from 'react';
import Nav from './components/Nav/Nav';
import Products from './pages/Products/Products';
import './App.css';

class App extends Component {
  state={
    currentPage:'Products'
  };
  
  render(){
    return (
      <div className="App">
        <Nav currentPage={this.state.currentPage}/>
        <Products />
      </div>
    );
  }
}

export default App;
