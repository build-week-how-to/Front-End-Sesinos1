import React, { Component } from 'react';
import axios from 'axios';

class home extends Component {
 
    state = {home:[]}
    componentDidMount() {
        axios
            .get('https://build-week-how-to.herokuapp.com/api/howto',{headers:{Authorization:localStorage.getItem("jwt")
            .then(res => {
                this.setState({home:res.data})
            })}})
            .catch(err => console.error(err))

    };

  render() {
    return (
      <div className="home">
      {this.state.home.map(h => (
        <div key={h.id}>
        <p>{h.title}</p>
        </div>
      ))}
      </div>
    );
  }
}


export default home;