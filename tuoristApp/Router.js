import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Login from './Login';
import Signup from './Signup';
import Organizator from './Organizator';
import Student from './Student';
import Admin from './Admin';
import Ponuda from './Ponuda';
import User from './User';

export default class Routes extends React.Component {

    render() {
  
      return (
  
        <Router>
          <Stack>
            <Scene key="login" component={Login} title="Login" initial={true} />
            <Scene key="signup" component={Signup} title="Register" />
            <Scene key="organizator" component={Organizator} title="Organizator" />
            <Scene key="student" component={Student} title="Student" />
            <Scene key="admin" component={Admin} title="Admin" />
            <Scene key="ponuda" component={Ponuda} title="Ponuda" />
            <Scene key="user" component={User} title="User" />
          </Stack>
        </Router>
      )
    }
  }