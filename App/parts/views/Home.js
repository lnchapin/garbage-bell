import React, {Component} from 'react'
import {AppRegistry, Platform, StyleSheet, Text, View, TextInput, Button, AsyncStorage, Image, TouchableOpacity, ScrollView, ImageBackground} from 'react-native'
import {Actions} from 'react-native-router-flux'
import Header from '../components/Header'
import Background from '../components/Background'

export default class Home extends Component {

  render (){
    return(
      <View>
        <Background>
        <Header />
        <View style={styles.myView}>
          <Text style={styles.signIn}>Home Page</Text>
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
    marginTop: 200,
  },
})

module.exports = Home
