import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default class Login extends React.Component {

  signup() {
    Actions.signup()
  };

  blank() {
    Actions.reset('home')
  }

  render() {
    return (

      <View style={styles.container}>

        <View style={styles.titleView}>
          <Text style={styles.title}>Welcome to StudentTuorsitApp</Text>
        </View>

        <View style={styles.subtitleView}>
          <Text style={styles.subtitle}>Login to continue or</Text>
          <Text style={styles.register}>Register</Text>
        </View>

        <View style={styles.formView}>
          <TextInput style={styles.input}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Username"
            secureTextEntry={true}
            placeholderTextColor="#31343a"
            returnKeyType="go"
            ref={(input) => this.username = input}
          />
          <TextInput style={styles.input}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#31343a"
            returnKeyType="go"
            ref={(input) => this.password = input}
          />
          <TouchableOpacity style={styles.login}>
            <Text style={styles.loginText}> Login </Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3E4149',
  },

  titleView: {
    flex: 1.5,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  subtitleView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },

  register: {
    fontSize: 17,
    color: '#FF9999',
  },

  formView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  input: {
    width: 230,
    height: 40,
    marginBottom: 15,
    backgroundColor: '#c5c6c8',
    textAlign: 'center'
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 20,
    color: '#FF9999',
  },

  subtitle: {
    fontSize: 17,
    color: '#FFC8C8',
  },

  login: {
    width: 85,
    height: 30,
    marginTop: 5,
    backgroundColor: '#FF9999',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },

  loginText: {
    color: '#3E4149',
    textAlign: 'center',
  }

})