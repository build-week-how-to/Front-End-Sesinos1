import React, { Component } from "react";
import { connect } from "react-redux";
import { updatingHowTo } from "../Actions/index";


class updatingHowToForm extends Component {
  state = {
   ttile: '',
   url: '',
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmitUpdate = event => {
    event.preventDefault();
    this.props.updatingHowTo(this.props.id, this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmitUpdate}>
        <input
          type="text"
          onChange={this.handleInputChange}
          name="name"
          placeholder="name"
          value={this.state.name}
        />
        <input
          type="text"
          onChange={this.handleInputChange}
          name="age"
          placeholder="age"
          value={this.state.age}
        />
        <input
          type="text"
          onChange={this.handleInputChange}
          name="height"
          placeholder="height"
          value={this.state.height}
        />
        <button>Submit</button>

      </form>
    );
  }
}

export default connect(
  () => ({}),
  { updatingHowTo }
)(updatingHowToForm);