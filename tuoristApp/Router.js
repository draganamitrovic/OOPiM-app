import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Login from './Login';
import Signup from './Signup';

export default class Routes extends React.Component {

    render() {
  
      return (
  
        <Router>
          <Stack>
            <Scene key="login" component={Login} title="Login" initial={true} />
            <Scene key="signup" component={Signup} title="Register" />
          </Stack>
        </Router>
      )
    }
  }