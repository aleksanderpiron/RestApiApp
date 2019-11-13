import React, {Component} from 'react';
import Nav from './components/Nav/Nav';
import Home from './components/Pages/Home'

class App extends Component {
  state={
    currentPage:'Home'
  };
  
  render(){
    return (
      <div className="App">
        <Nav />
        <Products />
      </div>
    );
  }
}

export default App;
