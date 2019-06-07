import React, { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class HowTos extends Component {
    state = {
        howtos: []
    };

    componentDidMount() {
        axios
            .get('https://build-week-how-to.herokuapp.com/api/howto' , { headers: { Authorization: localStorage.getItem('jwt') } })
            .then( res => {
                this.setState({
                    howtos: res.data
                });
            })
            .catch(error => console.error(error));
    }

    render() {
        return (
            <div className = 'howtos-container'>
                <h2> How Tos: </h2>
                <div className = 'howtos'>
                    {this.state.howtos.map( h => (
                        <div key = {h.id}>
                            <img src ={h.url} alt ={h.url}/>
                            <Link to={`/steps/${h.id}`}><h1><strong>{ h.title }</strong></h1></Link>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default withRouter(HowTos);