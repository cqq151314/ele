import React, { Component } from 'react';
import './App.css';
import Header from './component/Header/Header.jsx';
import Search from './component/Search/Search.jsx';
import  NavList from './component/NavList/NavList.jsx';
import  ProductList from './component/ProductList/ProductList';
import  Footer from './component/Footer/Footer.jsx';
import './store/fetch-npm-node';
import bsStore from './store/fetch-npm-node'
class App extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
          <div className="App">
            <Header />
              <Search />
              <NavList/>
             <Footer/>
          </div>
        );
    }
}
export default App;
