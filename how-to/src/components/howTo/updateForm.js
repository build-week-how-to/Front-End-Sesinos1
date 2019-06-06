//IMPORTS
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateHowTo } from '../../actions/index';

//ADD STEP FORM
class UpdateHowToForm extends Component {
    state = {
        howtos: {
            url: '',
            title: '',
        }
    }

    changeHandler = event => {
        event.preventDefault();
        this.setState({
            howtos: {
                ...this.state.howtos,
                [ event.target.name ]: event.target.value
            }
        });
    };

    submitDataHandler = event => {
        event.preventDefault();
        const id = this.props.match.params.howtoId
        this.props.updateHowTo( id , this.state.howtos ).then( () => this.props.history.push( "/howtos" ))
    };

    render() {
        return (
            <div className = "form-wrap">
                <form className = 'addImageForm' onSubmit={ this.submitDataHandler }>
                    <div className = "sign-header">
                        <h1>Update How To</h1>
                    </div>
                    <label> Title : </label>
                    <input
                        id = "title"
                        type = "text"
                        name = "title"
                        value = { this.state.howtos.title }
                        className = 'input'
                        placeholder = "Title"
                        onChange = { this.changeHandler }
                    />
                    <label> Url: </label>
                    <input
                        id = "url"
                        type = "text"
                        name = "url"
                        value = { this.state.howtos.url }
                        className = 'input'
                        placeholder = "Url"
                        onChange = { this.changeHandler }
                    />
                    <button type='submit' className='actButton'>Add</button>
                </form>
                <div/>
            </div>
        )
    }
}

//EXPORTS
export default withRouter( connect(
    null,
    { updateHowTo }
)(UpdateHowToForm));