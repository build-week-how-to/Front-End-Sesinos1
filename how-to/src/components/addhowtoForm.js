import React, { Component } from 'react';
import { addHowTo } from '../Actions/index';
import { connect } from 'react-redux';

class Add_Howto extends Component {
    state = {
        title: '',
    };

    addhowto(e) {
        console.log("click")
        e.preventDefault()
        this.props.addHowTo(this.state)
    }

    handelChanges(e) {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <form onSubmit={(e) => this.addhowto(e)}>
                <input onChange={(e) => this.handelChanges(e) } value={this.state.title}
                    name="title" type="text" />
                <button>add howto</button>
            </form>
        );
    }
}

export default connect(null, { addHowTo })(Add_Howto);
