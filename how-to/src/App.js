import React from 'react';
import './App.css';
import { Route, NavLink, withRouter } from 'react-router-dom';
import register from './components/register';
import login from './components/login';
import home from './components/home'
import Steps from './components/steps';


function App(props) {
  const logout = () => {
    localStorage.removeItem("jwt");
    props.history.push("/");
  };

  let loggedInNavBar = (
    <nav className='navBar'>
      <NavLink exact to='/home'> home </NavLink>
      <NavLink onClick={logout} className='logout' to='/' >Logout</NavLink>
    </nav>
  );

  let loggedOutNavBar = (
    <nav className='navBar'>
      <NavLink exact to='/registers'> Register </NavLink>
      <NavLink exact to='/'> Login </NavLink>
    </nav>
  );

  return (
    <div className='links' >

      {localStorage.getItem('jwt') ? (
        <div className="navBar">{loggedInNavBar}</div>
      ) : (
          <div>{loggedOutNavBar}</div>
        )}
      <Route exact path='/registers' component={register} />
      <Route exact path='/' component={login} />
      <Route path='/home' component={home} />
      <Route path='/steps/:howtoId' component={Steps} />
    </div>
  );

}

export default withRouter(App);
