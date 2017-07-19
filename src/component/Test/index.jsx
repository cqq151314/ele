import React from 'react';
import { Route, NavLink,Redirect,Switch,Link  } from 'react-router-dom'
// function Test({location}) {
//     // console.log(location);
//     // return <div>{location.pathname}</div>;
// }


function ListItemLink({to, ...rest}) {
   return  <Route path={to} children={ <Link to={to} {...rest}/> } />
}
// const ListItemLink = ({ to, ...rest }) => (
//     <Route path={to} children={({ match }) => (<li><Link to={to} {...rest}/></li>)}/>
// )

export default ListItemLink;