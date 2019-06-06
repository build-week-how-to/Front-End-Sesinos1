//IMPORTS
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addStep } from '../../actions/index';

//ADD STEP FORM
class AddStepForm extends Component {
    state = {
        steps: {
            step: '',
            howtoId: this.props.match.params.howtoId
        }
    }

    changeHandler = event => {
        event.preventDefault();
        this.setState({
            steps: {
                ...this.state.steps,
                [ event.target.name ]: event.target.value
            }
        });
    };

    submitDataHandler = event => {
        event.preventDefault();
        this.props.addStep( this.state.steps ).then( () => this.props.history.push( `/steps/${this.props.match.params.howtoId}` ))
    };

    render() {
        return (
            <div className = "form-wrap">
                <form className = 'addImageForm' onSubmit={ this.submitDataHandler }>
                    <div className = "sign-header">
                        <h1>Add Step</h1>
                    </div>
                    <label> Step Description:</label>
                    <input
                        id = "step"
                        type = "text"
                        name = "step"
                        value = { this.state.steps.step }
                        className = 'input'
                        placeholder = "Description"
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
    { addStep }
)(AddStepForm));