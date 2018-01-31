import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Student extends React.Component {

  logout() {
    Actions.login();
  };

  listDestination() {
    var destination = [{ name: 'destination 1', id: 1 }, { name: 'destination 2', id: 2 }, { name: 'destination', id: 3 }];
    
    let destinationItemList = [];

    destinationItemList = destination.map(Element => {
      return
      <View style={styles.destinationItem}>

        <Text style={styles.destText}> {Element.name} </Text>

        <TouchableOpacity style={styles.details} onPress={this.details}>
          <Text style={styles.detailsText}> Details </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.book} onPress={this.book}>
          <Text style={styles.bookText}> Book Now </Text>
        </TouchableOpacity>

      </View>
    })
    return (
      <ScrollView>
        {destinationItemList}
      </ScrollView>
    )
  }

  render() {
    
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <View style={styles.logout}>
            <TouchableOpacity style={styles.logoutbtn} onPress={this.logout}>
              <Text style={styles.logoutText}> Log out </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.headerTitle}>
            <Text style={styles.title}>StudentTuorsitApp</Text>
          </View>
        </View>

        <View style={styles.body}>
          <ScrollView>
            {this.listDestination()}
          </ScrollView>
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
    marginTop: 20,
    backgroundColor: '#2f4775',
    borderBottomWidth: 2,
    borderColor: '#19233e'
  },


  logout: {
    flex: 1,
    width: '100%',
    marginTop: 5,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    backgroundColor: '#2f4775',
  },

  logoutbtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 75,
    height: 30,
    borderBottomLeftRadius: 15,
    backgroundColor: '#F85F73',
    borderWidth: 2,
    borderColor: '#f86f81'
  },

  logoutText: {
    color: '#19233e',
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
    flex: 14,
    width: '100%'
  },

  listView: {
    flex: 8,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  details: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 75,
    height: 30,
    backgroundColor: '#F85F73',
    borderWidth: 2,
    borderColor: '#f86f81'
  },

  detailsText: {
    color: '#19233e',
    textAlign: 'center',
    paddingBottom: 3,
    paddingLeft: 2,
    fontSize: 16,
    fontWeight: 'bold'
  },

  book: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 75,
    height: 30,
    backgroundColor: '#f86f81',
    borderWidth: 2,
    borderColor: '#F85F73'
  },

  bookText: {
    color: '#19233e',
    textAlign: 'center',
    paddingBottom: 3,
    paddingLeft: 2,
    fontSize: 16,
    fontWeight: 'bold'
  },

  destinationItem: {
    justifyContent: 'space-between',
    height: 40,
    width: '100%',
    borderBottomWidth: 2,
    borderColor: '#f86f81'
  },

  destText: {
    textAlign: 'left',
    color: '#b8b3bb',
    alignSelf: 'center',
    width: '100%',
    fontSize: 16
  },

  listViewBtn: {
    flex: 2,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  footer: {
    flex: 0.5,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
    padding: 10,
    backgroundColor: '#213151'
  },

  footerText: {
    textAlign: 'right',
    color: '#928A97',
    alignSelf: 'flex-end',
    width: '100%',
    fontSize: 12
  },

})