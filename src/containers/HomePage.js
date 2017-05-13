import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../actions'

class HomePage extends Component {
  constructor(){
    super();

    this.state = {
      username: 1
    }
  }

  changed = event => {
    this.setState({
      username: event.target.value
    });
  }

  search = (event) => {
      this.props.fetchUser(this.state.username);
      event.preventDefault();
  }

  renderUser() {
    if (!this.props.user) return;
    const {name, location} = this.props.user;
    return (
       <ul>
          <li>Name: {name}</li>
          <li>Location: {location}</li>
      </ul>
    )
  }

  render() {
    return <form onSubmit={this.search}>
      Github username <input type="text" value={this.state.value} onChange={this.changed} /><button type="submit">Search</button>
      {this.renderUser()}
    </form>   
  }
}

const mapStateToProps = (state, ownProps) => {
  const {user} = state;
  return {
    user
  }
}

export default connect(mapStateToProps, {
  fetchUser,
})(HomePage)

