import React, { Component } from "react";
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteHowTo } from '../../actions/index';

class Steps extends Component {
    state = {
        steps: []
    }

    componentDidMount() {
        axios
            .get(`https://build-week-how-to.herokuapp.com/api/howto/${this.props.match.params.howtoId}`, { headers: { Authorization: localStorage.getItem('jwt') } })
            .then(res => {
                this.setState({
                    steps: res.data.steps
                });
            })
            .catch(error => console.error(error));
    }

    deleteHowTo = event => {
        event.preventDefault();
        const id = this.props.match.params.howtoId
        console.log( this.props.match.params.howtoId )
        this.props.deleteHowTo( id ).then( () => this.props.history.push( '/howtos' ))
    };

    render() {
        return (
            <>
                <h2> Steps: </h2>
                <div className = 'vents'>
                    {this.state.steps.map(s => (
                        <div key = {s.id}>
                            <p>{s.step}</p>
                        </div>
                    ))}
                    <Link to={`/addStep/${this.props.match.params.howtoId}`}><button>Add Step</button></Link>
                    <button onClick ={ this.deleteHowTo }>Delete How To Project</button>
                    <Link to={`/update/${this.props.match.params.howtoId}`}><h1> Update How To </h1></Link>
                </div>
                
            </>
        );
    }
}

export default withRouter( connect(
    null,
    { deleteHowTo }
)(Steps));