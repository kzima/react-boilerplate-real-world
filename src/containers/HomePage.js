import React, { Component } from 'react';
import { connect } from 'react-redux';

import { GithubUser } from '../components';
import { fetchUser } from '../actions'

class HomePage extends Component {
  constructor(){
    super();

    this.state = {
      username: ""
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

  render() {
    const {user} = this.props;
    return <form onSubmit={this.search}>
      Github username <input type="text" value={this.state.username} onChange={this.changed} /><button type="submit">Search</button>
      {user && <GithubUser user={user} />}
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

