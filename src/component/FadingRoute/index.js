import React from 'react';
import { Route, NavLink,Redirect,Switch,Link  } from 'react-router-dom'
const BoxRouter = ({ component: Component}) => (
  <Route   render={(props) => (<div><Component {...props} /></div> )} />
);
export default BoxRouter;