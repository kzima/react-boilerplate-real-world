import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'

import AccountPage from './containers/AccountPage'
import HomePage from './containers/HomePage'

export default class extends Component {
    render() {
        return (
            <div>
                <span>App </span>
                <Link to={'/home'}>home </Link> | 
                <Link to={'/account'}>account </Link>
                <Route path="/" exact render={() => <Redirect to='/home' />} />
                <Route path="/home" component={HomePage} />
                <Route path="/account" component={AccountPage} />
            </div>
        )
    }
}