import React, { Component } from 'react';
import axios from 'axios';
import Howtoform from './addhowtoForm'
import Steps from "./steps";
import { Link } from 'react-router-dom';


class home extends Component {
    state = {
      home: []
    };
  
    componentDidMount() {
      axios
        .get('https://build-week-how-to.herokuapp.com/api/howto' , { headers: { Authorization: localStorage.getItem( 'jwt' ) } })
        .then(res => {
            this.setState({
              home: res.data
            });
          })
          .catch(error => console.error( error ));
    }

  render() {
    return (
      <div className="home">
      <Howtoform />
      {this.state.home.map(h => (
        <div key={h.id}>
        <p>{h.title}</p>
        <p><Link to={`/steps/${h.id}`} component = { Steps } id={ `${h.id}` }><strong>{h.title}</strong></Link></p>
        </div>
      ))}
      </div>
    );
  }
}


export default home;