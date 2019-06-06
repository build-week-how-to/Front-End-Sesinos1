//IMPORTS
import React from 'react';
import './App.css';
import { Route, NavLink, withRouter } from 'react-router-dom';
import register from './components/users/register';
import login from './components/users/login';
import HowTos from './components/howTo/howtos';
import Steps from './components/steps/steps';
import AddHowToForm from './components/howTo/howtoForm';
import addStepForm from './components/steps/addStepForm';
import updateForm from './components/howTo/updateForm';

function App(props) {

  const logout = () => {
    localStorage.removeItem("jwt");
    props.history.push("/");
  };

  let loggedInNavBar = (
    <nav className='navBar'>
      <NavLink to='/howtos' className = 'option'> Home </NavLink>
      <NavLink to='/addHowTo'className = 'option' > Add How To </NavLink>
      <NavLink onClick={logout} className = 'option' to='/' >Logout</NavLink>
    </nav>
  );

  let loggedOutNavBar = (
    <nav className='navBar'>
      <NavLink exact to='/register' className = 'option' > Register </NavLink>
      <NavLink exact to='/' className = 'option' > Login </NavLink>
    </nav>
  );

  return (
    <div className='links' >
      <nav>
        {localStorage.getItem('jwt') ? (
          <div className="navBar">{loggedInNavBar}</div>
        ) : (
          <div>{loggedOutNavBar}</div>
        )}
      </nav>
      <Route exact path='/register' component={register} />
      <Route exact path='/' component={login} />
      <Route path='/howtos' component={HowTos} />
      <Route path='/steps/:howtoId' component={Steps} />
      <Route path='/addHowTo' component={AddHowToForm}/>
      <Route path='/addStep/:howtoId' component={ addStepForm }/>
      <Route path='/update/:howtoId' component={ updateForm }/>
    </div>
  );

}

export default withRouter(App);
