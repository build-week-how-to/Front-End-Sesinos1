import React from 'react';
import './App.css';
import { Route, NavLink, withRouter } from 'react-router-dom';
import register from './componenets/register';
import login from './componenets/login';
import home from './componenets/home'


function App(props) {
  const logout = () => {
    localStorage.removeItem("jwt");
    props.history.push("/");
  };

  return (
    <div className='links' >
      <nav>
        <NavLink exact to='/registers'> Register </NavLink>
        <NavLink exact to='/'> Login </NavLink>
        <NavLink exact to='/home'>home</NavLink>
        <NavLink onClick={logout} className='logout' to='/' >Logout</NavLink>

      </nav>
      <Route exact path='/registers' component={register} />
      <Route exact path='/' component={login} />
      <Route exact path='/home' component={home} />
    </div>
  );

}

export default withRouter( App );
