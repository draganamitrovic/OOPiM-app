import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Routes } from './Router';

export default class Admin extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Routes />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    }
})