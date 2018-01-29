import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class Ponuda extends React.Component {
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
      backgroundColor: '#364857',
      alignItems: 'center',
      justifyContent: 'center',
    }
})