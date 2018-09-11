import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, AsyncStorage} from 'react-native';
import {Actions} from 'react-native-router-flux'
import Sign_up from './Sign_up'
import Home from './Home'
import Header from '../components/Header'
import Background from '../components/Background'


export default class Stats extends Component {

  render (){
    return(
      <View>
        <Background>
        <Header />
        <View style={styles.myView}>
          <Text style={styles.heading}>Number of Rings:</Text>
          <View style={styles.body}>
          <Text>Today: `from DB`</Text>
          <Text>This Month: `from DB`</Text>
          <Text>This Year: `from DB`</Text>
          <Text>Lifetime: `from DB`</Text>
          </View>
        </View>
      </Background>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  myView: {
    justifyContent:'center',
    alignItems: 'center',
    padding: 5,
    marginTop: 20,
  },
  heading:{
    fontSize: 24,
    color: 'white'
  },
  body:{
    color: 'white'
  }
})

module.exports = Stats
