import React, { Component } from "react";
import axios from 'axios';
import { withRouter } from 'react-router-dom'

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

    render() {
        return (
            <>
                <h2> Steps: </h2>
                <div className = 'vents'>
                    {this.state.steps.map(h => (
                        <div key = {h.id}>
                            <p>{ h.id } </p>
                            <p>{h.step}</p>
                            <p>{h.howtoId}</p>
                        </div>
                    ))}
                </div>
            </>
        );
    }
}

export default withRouter( Steps );