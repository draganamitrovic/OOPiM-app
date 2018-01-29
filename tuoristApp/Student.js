import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class Student extends React.Component {
    render() {
        return (
            <View style={styles.container}>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: '100%',
      width: '100%',
      backgroundColor: '#4169e1',
      alignItems: 'center',
      justifyContent: 'center',
    }
})