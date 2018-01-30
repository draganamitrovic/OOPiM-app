import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class Student extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <View style={styles.logout}>
            <TouchableOpacity style={styles.logoutbtn} onPress={this.login}>
              <Text style={styles.logoutText}> Log out </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.headerTitle}>
            <Text style={styles.title}>StudentTuorsitApp</Text>
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.listView}>
          </View>
          <View style={styles.listViewBtn}>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>by Dragana Mitrovic</Text>
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
    backgroundColor: '#283C63',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    flex: 3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },


  logout: {
    flex: 1,
    width: '100%',
    marginTop: 5,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },

  logoutbtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 75,
    height: 30,
    borderBottomLeftRadius: 15,
    backgroundColor: '#F85F73'
  },

  logoutText: {
    color: '#283C63',
    textAlign: 'center',
    paddingBottom: 3,
    paddingLeft: 2,
    fontSize: 16,
    fontWeight: 'bold'
  },

  headerTitle: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 20,
    color: '#F85F73'
  },

  body: {
    flex: 12,
    width: '100%'
  },

  listView: {
    flex: 8,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  listViewBtn: {
    flex: 2,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
    padding: 10
  },

  footerText: {
    textAlign: 'right',
    color: '#928A97',
    alignSelf: 'flex-end',
    width: '100%',
    fontSize: 12
  },

})