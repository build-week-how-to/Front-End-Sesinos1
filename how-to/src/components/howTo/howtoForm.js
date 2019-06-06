/* eslint-disable react/jsx-no-duplicate-props */
//IMPORTS
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addHowTo } from '../../actions/index';
import '../../App.css';

//REGISTER FORM
class AddHowToForm extends Component {
    state = {
        howto: {
            title: '',
            url: ''
        }
    }

    changeHandler = event => {
        event.preventDefault();
        this.setState({
            howto: {
                ...this.state.howto,
                [ event.target.name ]: event.target.value
            }
        });
    };

    submitDataHandler = event => {
        event.preventDefault();
        this.props.addHowTo( this.state.howto ).then( () => this.props.history.push( "/howtos" ))
    };

    render() {
        return (
            <div className = "form-wrap">
                <form className = 'addImageForm' onSubmit={ this.submitDataHandler }>
                    <div className = "sign-header">
                        <h1>Add How To</h1>
                    </div>
                    <label>How To Title:</label>
                    <div>
                        <textarea class="form-control" name="textarea" id="textarea"                         
                        id = "id"
                        type = "text"
                        name = "title"
                        value = { this.state.howto.title }
                        className = 'input'
                        placeholder = "Info"
                        onChange = { this.changeHandler }></textarea>
                    </div>
                    <label>Image ( optional ):</label>
                    <input
                        id = "url"
                        type = "text"
                        name = "url"
                        value = { this.state.howto.url }
                        className = 'input'
                        placeholder = "Image URL"
                        onChange = { this.changeHandler }
                    />
                    <button type='submit' className='actButton'>Add</button>
                </form>
                <div />
            </div>
        )
    }
}

//EXPORTS
export default connect(
    null,
    { addHowTo }
)(AddHowToForm)