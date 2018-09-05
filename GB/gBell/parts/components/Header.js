import React, {Component} from 'react';
import {AppRegistry, Platform, StyleSheet, Text, View} from 'react-native';

export default class Header extends Component {
  render (){
    return(
      <View style={styles.header}>
        <Text style={styles.name}>Garbage Bell</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 15,
    paddingBottom: 5,
    alignItems: 'center',
    backgroundColor: '#000000'
  },
  name:{
    fontSize: 24,
    color: '#F800B7'
  }
})

module.exports = Header
// AppRegistry.registerComponent('Header', () => Capstone)
