import React, { Component} from 'react';
// import { BrowserRouter, Route, } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import profile from './component/UserCenter/index'
import App from './App'
class MyRouter extends Component {
    render(){
                return (
                    <Router>
                        <div>
                            <Route exact path="/" component={App}/>
                            <Route path="/profile" exact component={profile}/>
                            <Route exact path="/profile/orderThree/"  component={profile}/>
                            <Route path="/profile/center/" exact component={profile}/>
                            <Route path="/profile/untated/" exact component={profile}/>
                            <Route path="/profile/refused/" exact component={profile}/>
                            <Route  path="/profile/orderThree/:id"  component={profile}/>
                        </div>
                    </Router>
                );
            }
    }
export default MyRouter;
