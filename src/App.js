import React, { Component } from 'react';
import './App.css';
import Header from './component/Header/Header.jsx';
import Search from './component/Search/Search.jsx';
import  Store from './component/NavList/NavList.jsx';
import  ProductList from './component/ProductList/ProductList';
import  Footer from './component/Footer/Footer.jsx';
import './store/fetch-npm-node';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Search />
        <Store />
          <ProductList />
         <Footer/>
      </div>
    );
  }
}
export default App;
